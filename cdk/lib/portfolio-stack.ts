import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';

export interface PortfolioStackProps extends cdk.StackProps {
  certificateArn?: string;
}

export class PortfolioStack extends cdk.Stack {
  public readonly hostedZone: route53.IHostedZone;

  constructor(scope: Construct, id: string, props?: PortfolioStackProps) {
    super(scope, id, props);

    const domainName = 'manishmitra.com';
    const wwwDomainName = `www.${domainName}`;

    // Create Route53 Hosted Zone for the domain
    this.hostedZone = new route53.PublicHostedZone(this, 'PortfolioHostedZone', {
      zoneName: domainName,
      comment: 'Hosted zone for Manish Mitra portfolio website',
    });

    // Import ACM Certificate from us-east-1 (created by CertificateStack)
    const certificate = props?.certificateArn
      ? acm.Certificate.fromCertificateArn(this, 'ImportedCertificate', props.certificateArn)
      : undefined;

    // Create S3 bucket for static website hosting (private, accessed via CloudFront)
    const websiteBucket = new s3.Bucket(this, 'PortfolioWebsiteBucket', {
      bucketName: `manish-mitra-portfolio-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true, // Clean up on stack deletion
      versioned: false,
    });

    // Create CloudFront distribution with custom domain
    const distribution = new cloudfront.Distribution(this, 'PortfolioDistribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
      },
      domainNames: certificate ? [domainName, wwwDomainName] : undefined,
      certificate: certificate,
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

    // Create Route53 A records only if certificate is available
    if (certificate) {
      new route53.ARecord(this, 'PortfolioAliasRecord', {
        zone: this.hostedZone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new route53.ARecord(this, 'PortfolioWwwAliasRecord', {
        zone: this.hostedZone,
        recordName: wwwDomainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
    }

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
      value: `https://${domainName}`,
      description: 'Portfolio Website URL',
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'CloudFront Distribution URL',
    });

    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
      description: 'Route53 Hosted Zone ID',
      exportName: 'PortfolioHostedZoneId',
    });

    new cdk.CfnOutput(this, 'HostedZoneName', {
      value: this.hostedZone.zoneName,
      description: 'Route53 Hosted Zone Name',
      exportName: 'PortfolioHostedZoneName',
    });

    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', this.hostedZone.hostedZoneNameServers || []),
      description: 'Route53 Name Servers - Update these at your domain registrar',
    });

    new cdk.CfnOutput(this, 'DomainName', {
      value: domainName,
      description: 'Custom Domain Name',
    });

    new cdk.CfnOutput(this, 'Architecture', {
      value: 'Route53 + S3 + CloudFront + ACM (Static Site with Custom Domain)',
      description: 'Pure static site hosting - no Lambda, no server',
    });

    new cdk.CfnOutput(this, 'DeploymentMethod', {
      value: 'GitHub Actions with S3 Sync (No Custom Resources)',
      description: 'Deployment approach - eliminates stuck deployment issues',
    });

    new cdk.CfnOutput(this, 'CostOptimization', {
      value: 'Route53 ($0.50) + S3 + CloudFront: ~$1.50-4/month',
      description: 'Expected monthly cost for low traffic',
    });
  }
}
