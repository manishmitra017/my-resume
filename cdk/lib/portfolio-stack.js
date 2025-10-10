"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const origins = require("aws-cdk-lib/aws-cloudfront-origins");
const route53 = require("aws-cdk-lib/aws-route53");
const targets = require("aws-cdk-lib/aws-route53-targets");
const acm = require("aws-cdk-lib/aws-certificatemanager");
class PortfolioStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.PortfolioStack = PortfolioStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9ydGZvbGlvLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCxtREFBbUQ7QUFDbkQsMkRBQTJEO0FBQzNELDBEQUEwRDtBQU8xRCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsS0FBSztJQUczQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQTJCO1FBQ25FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQ3JDLE1BQU0sYUFBYSxHQUFHLE9BQU8sVUFBVSxFQUFFLENBQUM7UUFFMUMsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQzFFLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxnREFBZ0Q7U0FDMUQsQ0FBQyxDQUFDO1FBRUgsc0VBQXNFO1FBQ3RFLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxjQUFjO1lBQ3ZDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQ3ZGLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFZCxpRkFBaUY7UUFDakYsTUFBTSxhQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRTtZQUNsRSxVQUFVLEVBQUUsaUNBQWlDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0QsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixpQkFBaUIsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENB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QUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3BDLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFdBQVcsRUFBRSxvQkFBb0I7U0FDbEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDdEMsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxXQUFXLEVBQUUsaURBQWlEO1NBQy9ELENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDMUMsS0FBSyxFQUFFLG1EQUFtRDtZQUMxRCxXQUFXLEVBQUUsMERBQTBEO1NBQ3hFLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDMUMsS0FBSyxFQUFFLG1EQUFtRDtZQUMxRCxXQUFXLEVBQUUsdUNBQXVDO1NBQ3JELENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWpKRCx3Q0FpSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQnO1xuaW1wb3J0ICogYXMgb3JpZ2lucyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udC1vcmlnaW5zJztcbmltcG9ydCAqIGFzIHJvdXRlNTMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXJvdXRlNTMnO1xuaW1wb3J0ICogYXMgdGFyZ2V0cyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtcm91dGU1My10YXJnZXRzJztcbmltcG9ydCAqIGFzIGFjbSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2VydGlmaWNhdGVtYW5hZ2VyJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRmb2xpb1N0YWNrUHJvcHMgZXh0ZW5kcyBjZGsuU3RhY2tQcm9wcyB7XG4gIGNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUG9ydGZvbGlvU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBwdWJsaWMgcmVhZG9ubHkgaG9zdGVkWm9uZTogcm91dGU1My5JSG9zdGVkWm9uZTtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFBvcnRmb2xpb1N0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGRvbWFpbk5hbWUgPSAnbWFuaXNobWl0cmEuY29tJztcbiAgICBjb25zdCB3d3dEb21haW5OYW1lID0gYHd3dy4ke2RvbWFpbk5hbWV9YDtcblxuICAgIC8vIENyZWF0ZSBSb3V0ZTUzIEhvc3RlZCBab25lIGZvciB0aGUgZG9tYWluXG4gICAgdGhpcy5ob3N0ZWRab25lID0gbmV3IHJvdXRlNTMuUHVibGljSG9zdGVkWm9uZSh0aGlzLCAnUG9ydGZvbGlvSG9zdGVkWm9uZScsIHtcbiAgICAgIHpvbmVOYW1lOiBkb21haW5OYW1lLFxuICAgICAgY29tbWVudDogJ0hvc3RlZCB6b25lIGZvciBNYW5pc2ggTWl0cmEgcG9ydGZvbGlvIHdlYnNpdGUnLFxuICAgIH0pO1xuXG4gICAgLy8gSW1wb3J0IEFDTSBDZXJ0aWZpY2F0ZSBmcm9tIHVzLWVhc3QtMSAoY3JlYXRlZCBieSBDZXJ0aWZpY2F0ZVN0YWNrKVxuICAgIGNvbnN0IGNlcnRpZmljYXRlID0gcHJvcHM/LmNlcnRpZmljYXRlQXJuXG4gICAgICA/IGFjbS5DZXJ0aWZpY2F0ZS5mcm9tQ2VydGlmaWNhdGVBcm4odGhpcywgJ0ltcG9ydGVkQ2VydGlmaWNhdGUnLCBwcm9wcy5jZXJ0aWZpY2F0ZUFybilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gQ3JlYXRlIFMzIGJ1Y2tldCBmb3Igc3RhdGljIHdlYnNpdGUgaG9zdGluZyAocHJpdmF0ZSwgYWNjZXNzZWQgdmlhIENsb3VkRnJvbnQpXG4gICAgY29uc3Qgd2Vic2l0ZUJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgJ1BvcnRmb2xpb1dlYnNpdGVCdWNrZXQnLCB7XG4gICAgICBidWNrZXROYW1lOiBgbWFuaXNoLW1pdHJhLXBvcnRmb2xpby1zdGF0aWMtJHt0aGlzLmFjY291bnR9YCxcbiAgICAgIHB1YmxpY1JlYWRBY2Nlc3M6IGZhbHNlLFxuICAgICAgYmxvY2tQdWJsaWNBY2Nlc3M6IHMzLkJsb2NrUHVibGljQWNjZXNzLkJMT0NLX0FMTCxcbiAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG4gICAgICBhdXRvRGVsZXRlT2JqZWN0czogdHJ1ZSwgLy8gQ2xlYW4gdXAgb24gc3RhY2sgZGVsZXRpb25cbiAgICAgIHZlcnNpb25lZDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgQ2xvdWRGcm9udCBkaXN0cmlidXRpb24gd2l0aCBjdXN0b20gZG9tYWluXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uID0gbmV3IGNsb3VkZnJvbnQuRGlzdHJpYnV0aW9uKHRoaXMsICdQb3J0Zm9saW9EaXN0cmlidXRpb24nLCB7XG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICAgICAgb3JpZ2luOiBvcmlnaW5zLlMzQnVja2V0T3JpZ2luLndpdGhPcmlnaW5BY2Nlc3NDb250cm9sKHdlYnNpdGVCdWNrZXQpLFxuICAgICAgICB2aWV3ZXJQcm90b2NvbFBvbGljeTogY2xvdWRmcm9udC5WaWV3ZXJQcm90b2NvbFBvbGljeS5SRURJUkVDVF9UT19IVFRQUyxcbiAgICAgICAgYWxsb3dlZE1ldGhvZHM6IGNsb3VkZnJvbnQuQWxsb3dlZE1ldGhvZHMuQUxMT1dfR0VUX0hFQURfT1BUSU9OUyxcbiAgICAgICAgY2FjaGVkTWV0aG9kczogY2xvdWRmcm9udC5DYWNoZWRNZXRob2RzLkNBQ0hFX0dFVF9IRUFEX09QVElPTlMsXG4gICAgICAgIGNhY2hlUG9saWN5OiBjbG91ZGZyb250LkNhY2hlUG9saWN5LkNBQ0hJTkdfT1BUSU1JWkVELFxuICAgICAgICBjb21wcmVzczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBkb21haW5OYW1lczogY2VydGlmaWNhdGUgPyBbZG9tYWluTmFtZSwgd3d3RG9tYWluTmFtZV0gOiB1bmRlZmluZWQsXG4gICAgICBjZXJ0aWZpY2F0ZTogY2VydGlmaWNhdGUsXG4gICAgICBkZWZhdWx0Um9vdE9iamVjdDogJ2luZGV4Lmh0bWwnLFxuICAgICAgZXJyb3JSZXNwb25zZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGh0dHBTdGF0dXM6IDQwNCxcbiAgICAgICAgICByZXNwb25zZUh0dHBTdGF0dXM6IDQwNCxcbiAgICAgICAgICByZXNwb25zZVBhZ2VQYXRoOiAnLzQwNC5odG1sJyxcbiAgICAgICAgICB0dGw6IGNkay5EdXJhdGlvbi5taW51dGVzKDUpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaHR0cFN0YXR1czogNDAzLFxuICAgICAgICAgIHJlc3BvbnNlSHR0cFN0YXR1czogNDA0LFxuICAgICAgICAgIHJlc3BvbnNlUGFnZVBhdGg6ICcvNDA0Lmh0bWwnLFxuICAgICAgICAgIHR0bDogY2RrLkR1cmF0aW9uLm1pbnV0ZXMoNSksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcHJpY2VDbGFzczogY2xvdWRmcm9udC5QcmljZUNsYXNzLlBSSUNFX0NMQVNTXzEwMCwgLy8gQ29zdCBvcHRpbWl6YXRpb25cbiAgICAgIG1pbmltdW1Qcm90b2NvbFZlcnNpb246IGNsb3VkZnJvbnQuU2VjdXJpdHlQb2xpY3lQcm90b2NvbC5UTFNfVjFfMl8yMDIxLFxuICAgIH0pO1xuXG4gICAgLy8gTk8gQlVDS0VUIERFUExPWU1FTlQgLSBGaWxlcyB1cGxvYWRlZCB2aWEgR2l0SHViIEFjdGlvbnMgUzMgc3luY1xuICAgIC8vIFRoaXMgZWxpbWluYXRlcyBjdXN0b20gcmVzb3VyY2Ugc3R1Y2sgaXNzdWVzXG5cbiAgICAvLyBDcmVhdGUgUm91dGU1MyBBIHJlY29yZHMgb25seSBpZiBjZXJ0aWZpY2F0ZSBpcyBhdmFpbGFibGVcbiAgICBpZiAoY2VydGlmaWNhdGUpIHtcbiAgICAgIG5ldyByb3V0ZTUzLkFSZWNvcmQodGhpcywgJ1BvcnRmb2xpb0FsaWFzUmVjb3JkJywge1xuICAgICAgICB6b25lOiB0aGlzLmhvc3RlZFpvbmUsXG4gICAgICAgIHJlY29yZE5hbWU6IGRvbWFpbk5hbWUsXG4gICAgICAgIHRhcmdldDogcm91dGU1My5SZWNvcmRUYXJnZXQuZnJvbUFsaWFzKG5ldyB0YXJnZXRzLkNsb3VkRnJvbnRUYXJnZXQoZGlzdHJpYnV0aW9uKSksXG4gICAgICB9KTtcblxuICAgICAgbmV3IHJvdXRlNTMuQVJlY29yZCh0aGlzLCAnUG9ydGZvbGlvV3d3QWxpYXNSZWNvcmQnLCB7XG4gICAgICAgIHpvbmU6IHRoaXMuaG9zdGVkWm9uZSxcbiAgICAgICAgcmVjb3JkTmFtZTogd3d3RG9tYWluTmFtZSxcbiAgICAgICAgdGFyZ2V0OiByb3V0ZTUzLlJlY29yZFRhcmdldC5mcm9tQWxpYXMobmV3IHRhcmdldHMuQ2xvdWRGcm9udFRhcmdldChkaXN0cmlidXRpb24pKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE91dHB1dHMgZm9yIEdpdEh1YiBBY3Rpb25zXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0J1Y2tldE5hbWUnLCB7XG4gICAgICB2YWx1ZTogd2Vic2l0ZUJ1Y2tldC5idWNrZXROYW1lLFxuICAgICAgZGVzY3JpcHRpb246ICdTMyBCdWNrZXQgTmFtZSBmb3IgR2l0SHViIEFjdGlvbnMnLFxuICAgICAgZXhwb3J0TmFtZTogJ1BvcnRmb2xpb0J1Y2tldE5hbWUnLFxuICAgIH0pO1xuXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0Rpc3RyaWJ1dGlvbklkJywge1xuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5kaXN0cmlidXRpb25JZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xvdWRGcm9udCBEaXN0cmlidXRpb24gSUQgZm9yIGNhY2hlIGludmFsaWRhdGlvbicsXG4gICAgICBleHBvcnROYW1lOiAnUG9ydGZvbGlvRGlzdHJpYnV0aW9uSWQnLFxuICAgIH0pO1xuXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0Rpc3RyaWJ1dGlvbkRvbWFpbk5hbWUnLCB7XG4gICAgICB2YWx1ZTogZGlzdHJpYnV0aW9uLmRpc3RyaWJ1dGlvbkRvbWFpbk5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Nsb3VkRnJvbnQgRGlzdHJpYnV0aW9uIERvbWFpbiBOYW1lJyxcbiAgICAgIGV4cG9ydE5hbWU6ICdQb3J0Zm9saW9EaXN0cmlidXRpb25Eb21haW4nLFxuICAgIH0pO1xuXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ1dlYnNpdGVVUkwnLCB7XG4gICAgICB2YWx1ZTogYGh0dHBzOi8vJHtkb21haW5OYW1lfWAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BvcnRmb2xpbyBXZWJzaXRlIFVSTCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQ2xvdWRGcm9udFVSTCcsIHtcbiAgICAgIHZhbHVlOiBgaHR0cHM6Ly8ke2Rpc3RyaWJ1dGlvbi5kaXN0cmlidXRpb25Eb21haW5OYW1lfWAsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Nsb3VkRnJvbnQgRGlzdHJpYnV0aW9uIFVSTCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnSG9zdGVkWm9uZUlkJywge1xuICAgICAgdmFsdWU6IHRoaXMuaG9zdGVkWm9uZS5ob3N0ZWRab25lSWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JvdXRlNTMgSG9zdGVkIFpvbmUgSUQnLFxuICAgICAgZXhwb3J0TmFtZTogJ1BvcnRmb2xpb0hvc3RlZFpvbmVJZCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnSG9zdGVkWm9uZU5hbWUnLCB7XG4gICAgICB2YWx1ZTogdGhpcy5ob3N0ZWRab25lLnpvbmVOYW1lLFxuICAgICAgZGVzY3JpcHRpb246ICdSb3V0ZTUzIEhvc3RlZCBab25lIE5hbWUnLFxuICAgICAgZXhwb3J0TmFtZTogJ1BvcnRmb2xpb0hvc3RlZFpvbmVOYW1lJyxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdOYW1lU2VydmVycycsIHtcbiAgICAgIHZhbHVlOiBjZGsuRm4uam9pbignLCAnLCB0aGlzLmhvc3RlZFpvbmUuaG9zdGVkWm9uZU5hbWVTZXJ2ZXJzIHx8IFtdKSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUm91dGU1MyBOYW1lIFNlcnZlcnMgLSBVcGRhdGUgdGhlc2UgYXQgeW91ciBkb21haW4gcmVnaXN0cmFyJyxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdEb21haW5OYW1lJywge1xuICAgICAgdmFsdWU6IGRvbWFpbk5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0N1c3RvbSBEb21haW4gTmFtZScsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQXJjaGl0ZWN0dXJlJywge1xuICAgICAgdmFsdWU6ICdSb3V0ZTUzICsgUzMgKyBDbG91ZEZyb250ICsgQUNNIChTdGF0aWMgU2l0ZSB3aXRoIEN1c3RvbSBEb21haW4pJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUHVyZSBzdGF0aWMgc2l0ZSBob3N0aW5nIC0gbm8gTGFtYmRhLCBubyBzZXJ2ZXInLFxuICAgIH0pO1xuXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0RlcGxveW1lbnRNZXRob2QnLCB7XG4gICAgICB2YWx1ZTogJ0dpdEh1YiBBY3Rpb25zIHdpdGggUzMgU3luYyAoTm8gQ3VzdG9tIFJlc291cmNlcyknLFxuICAgICAgZGVzY3JpcHRpb246ICdEZXBsb3ltZW50IGFwcHJvYWNoIC0gZWxpbWluYXRlcyBzdHVjayBkZXBsb3ltZW50IGlzc3VlcycsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQ29zdE9wdGltaXphdGlvbicsIHtcbiAgICAgIHZhbHVlOiAnUm91dGU1MyAoJDAuNTApICsgUzMgKyBDbG91ZEZyb250OiB+JDEuNTAtNC9tb250aCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0V4cGVjdGVkIG1vbnRobHkgY29zdCBmb3IgbG93IHRyYWZmaWMnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=