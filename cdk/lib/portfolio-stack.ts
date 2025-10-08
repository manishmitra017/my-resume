import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 bucket for static website hosting (private, accessed via CloudFront)
    const websiteBucket = new s3.Bucket(this, 'PortfolioWebsiteBucket', {
      bucketName: `manish-mitra-portfolio-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true, // Clean up on stack deletion
      versioned: false,
    });

    // Create CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'PortfolioDistribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100, // Cost optimization
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    });

    // NO BUCKET DEPLOYMENT - Files uploaded via GitHub Actions S3 sync
    // This eliminates custom resource stuck issues

    // Outputs for GitHub Actions
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name for GitHub Actions',
      exportName: 'PortfolioBucketName',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID for cache invalidation',
      exportName: 'PortfolioDistributionId',
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
      exportName: 'PortfolioDistributionDomain',
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'Portfolio Website URL',
    });

    new cdk.CfnOutput(this, 'Architecture', {
      value: 'S3 + CloudFront (Static Site)',
      description: 'Pure static site hosting - no Lambda, no server',
    });

    new cdk.CfnOutput(this, 'DeploymentMethod', {
      value: 'GitHub Actions with S3 Sync (No Custom Resources)',
      description: 'Deployment approach - eliminates stuck deployment issues',
    });

    new cdk.CfnOutput(this, 'CostOptimization', {
      value: 'S3 + CloudFront: ~$1-3/month',
      description: 'Expected monthly cost for low traffic',
    });
  }
}
