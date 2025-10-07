import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as path from 'path';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ===== S3 BUCKET FOR STATIC ASSETS =====
    // Static assets: _next/static/*, images, etc.
    // Deployed via GitHub Actions S3 sync (no BucketDeployment custom resource)
    const staticAssetsBucket = new s3.Bucket(this, 'PortfolioStaticAssetsBucket', {
      bucketName: `manish-mitra-portfolio-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Change to RETAIN for production
      autoDeleteObjects: true, // Change to false for production
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: false, // No versioning needed for static assets
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.HEAD],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
          maxAge: 3000,
        },
      ],
    });

    // ===== LAMBDA FUNCTION FOR NEXT.JS SSR =====
    const nextjsFunction = new lambda.Function(this, 'PortfolioNextjsFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../.next-lambda')),
      memorySize: 1024,
      timeout: cdk.Duration.seconds(30),
      environment: {
        NODE_ENV: 'production',
      },
      description: 'Lambda function serving Next.js portfolio application',
    });

    // Lambda Function URL for direct invocation
    const functionUrl = nextjsFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ['*'],
        allowedMethods: [lambda.HttpMethod.ALL],
        allowedHeaders: ['*'],
        maxAge: cdk.Duration.hours(1),
      },
    });

    // ===== CLOUDFRONT DISTRIBUTION =====
    // Multiple origins: Lambda for dynamic content, S3 for static assets
    const distribution = new cloudfront.Distribution(this, 'PortfolioDistribution', {
      comment: 'Manish Mitra Portfolio - Lambda SSR + S3 Static Assets',

      // Default behavior: All requests go to Lambda (dynamic content)
      defaultBehavior: {
        origin: new origins.HttpOrigin(
          cdk.Fn.select(2, cdk.Fn.split('/', functionUrl.url))
        ),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        compress: true,
        // Cache policy for dynamic content
        cachePolicy: new cloudfront.CachePolicy(this, 'NextjsCachePolicy', {
          cachePolicyName: `NextjsServerCache-${this.stackName}`,
          minTtl: cdk.Duration.seconds(0),
          maxTtl: cdk.Duration.days(365),
          defaultTtl: cdk.Duration.seconds(0), // No caching for dynamic content
          queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
          headerBehavior: cloudfront.CacheHeaderBehavior.allowList(
            'Accept',
            'Accept-Language',
            'Authorization',
            'CloudFront-Viewer-Country',
            'Host'
          ),
          cookieBehavior: cloudfront.CacheCookieBehavior.all(),
          enableAcceptEncodingGzip: true,
          enableAcceptEncodingBrotli: true,
        }),
        originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER,
      },

      // Additional behaviors: Static assets from S3
      additionalBehaviors: {
        // Next.js static assets
        '_next/static/*': {
          origin: origins.S3BucketOrigin.withOriginAccessControl(staticAssetsBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED, // 1 year cache
        },
        // Public assets (images, fonts, etc.)
        'images/*': {
          origin: origins.S3BucketOrigin.withOriginAccessControl(staticAssetsBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
        '*.jpg': {
          origin: origins.S3BucketOrigin.withOriginAccessControl(staticAssetsBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
        '*.jpeg': {
          origin: origins.S3BucketOrigin.withOriginAccessControl(staticAssetsBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
        '*.png': {
          origin: origins.S3BucketOrigin.withOriginAccessControl(staticAssetsBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
      },

      priceClass: cloudfront.PriceClass.PRICE_CLASS_100, // Use only North America and Europe
      enableIpv6: true,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    });

    // Grant CloudFront access to read from S3 bucket
    staticAssetsBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [staticAssetsBucket.arnForObjects('*')],
        principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com')],
        conditions: {
          StringEquals: {
            'AWS:SourceArn': `arn:aws:cloudfront::${this.account}:distribution/${distribution.distributionId}`,
          },
        },
      })
    );

    // ===== OUTPUTS FOR GITHUB ACTIONS =====
    new cdk.CfnOutput(this, 'StaticBucketName', {
      value: staticAssetsBucket.bucketName,
      description: 'S3 Bucket Name for GitHub Actions deployment',
      exportName: 'PortfolioStaticBucketName',
    });

    new cdk.CfnOutput(this, 'LambdaFunctionName', {
      value: nextjsFunction.functionName,
      description: 'Lambda Function Name',
      exportName: 'PortfolioLambdaFunctionName',
    });

    new cdk.CfnOutput(this, 'LambdaFunctionUrl', {
      value: functionUrl.url,
      description: 'Lambda Function URL (for testing)',
      exportName: 'PortfolioLambdaFunctionUrl',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID for cache invalidation',
      exportName: 'PortfolioDistributionId',
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
      exportName: 'PortfolioDomainName',
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'Portfolio Website URL',
      exportName: 'PortfolioWebsiteURL',
    });

    new cdk.CfnOutput(this, 'DeploymentMethod', {
      value: 'GitHub Actions: S3 Sync + Lambda Update (No Custom Resources)',
      description: 'Deployment approach - clean and reliable',
    });

    new cdk.CfnOutput(this, 'Architecture', {
      value: 'Lambda (SSR) + S3 (Static Assets) + CloudFront (CDN)',
      description: 'Hybrid serverless architecture',
    });

    new cdk.CfnOutput(this, 'CostOptimization', {
      value: 'Lambda: Pay per request | S3: <$1/month | CloudFront: ~$1-3/month',
      description: 'Expected monthly costs: ~$2-5 total',
    });
  }
}
