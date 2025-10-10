"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateStack = void 0;
const cdk = require("aws-cdk-lib");
const acm = require("aws-cdk-lib/aws-certificatemanager");
const route53 = require("aws-cdk-lib/aws-route53");
class CertificateStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Import the hosted zone from the main stack
        const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'ImportedHostedZone', {
            hostedZoneId: props.hostedZoneId,
            zoneName: props.hostedZoneName,
        });
        // Create ACM Certificate in us-east-1 for CloudFront
        this.certificate = new acm.Certificate(this, 'Certificate', {
            domainName: props.domainName,
            subjectAlternativeNames: [`www.${props.domainName}`],
            validation: acm.CertificateValidation.fromDns(hostedZone),
        });
        // Export certificate ARN for use in main stack
        new cdk.CfnOutput(this, 'CertificateArn', {
            value: this.certificate.certificateArn,
            description: 'ACM Certificate ARN for CloudFront',
            exportName: 'PortfolioCertificateArn',
        });
    }
}
exports.CertificateStack = CertificateStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZXJ0aWZpY2F0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsMERBQTBEO0FBQzFELG1EQUFtRDtBQVNuRCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRzdDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBNEI7UUFDcEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNkNBQTZDO1FBQzdDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3pGLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDL0IsQ0FBQyxDQUFDO1FBRUgscURBQXFEO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDMUQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLHVCQUF1QixFQUFFLENBQUMsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEQsVUFBVSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQzFELENBQUMsQ0FBQztRQUVILCtDQUErQztRQUMvQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDdEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxVQUFVLEVBQUUseUJBQXlCO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTFCRCw0Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgYWNtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1jZXJ0aWZpY2F0ZW1hbmFnZXInO1xuaW1wb3J0ICogYXMgcm91dGU1MyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtcm91dGU1Myc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZVN0YWNrUHJvcHMgZXh0ZW5kcyBjZGsuU3RhY2tQcm9wcyB7XG4gIGRvbWFpbk5hbWU6IHN0cmluZztcbiAgaG9zdGVkWm9uZUlkOiBzdHJpbmc7XG4gIGhvc3RlZFpvbmVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgcHVibGljIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBhY20uQ2VydGlmaWNhdGU7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENlcnRpZmljYXRlU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gSW1wb3J0IHRoZSBob3N0ZWQgem9uZSBmcm9tIHRoZSBtYWluIHN0YWNrXG4gICAgY29uc3QgaG9zdGVkWm9uZSA9IHJvdXRlNTMuSG9zdGVkWm9uZS5mcm9tSG9zdGVkWm9uZUF0dHJpYnV0ZXModGhpcywgJ0ltcG9ydGVkSG9zdGVkWm9uZScsIHtcbiAgICAgIGhvc3RlZFpvbmVJZDogcHJvcHMuaG9zdGVkWm9uZUlkLFxuICAgICAgem9uZU5hbWU6IHByb3BzLmhvc3RlZFpvbmVOYW1lLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIEFDTSBDZXJ0aWZpY2F0ZSBpbiB1cy1lYXN0LTEgZm9yIENsb3VkRnJvbnRcbiAgICB0aGlzLmNlcnRpZmljYXRlID0gbmV3IGFjbS5DZXJ0aWZpY2F0ZSh0aGlzLCAnQ2VydGlmaWNhdGUnLCB7XG4gICAgICBkb21haW5OYW1lOiBwcm9wcy5kb21haW5OYW1lLFxuICAgICAgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM6IFtgd3d3LiR7cHJvcHMuZG9tYWluTmFtZX1gXSxcbiAgICAgIHZhbGlkYXRpb246IGFjbS5DZXJ0aWZpY2F0ZVZhbGlkYXRpb24uZnJvbURucyhob3N0ZWRab25lKSxcbiAgICB9KTtcblxuICAgIC8vIEV4cG9ydCBjZXJ0aWZpY2F0ZSBBUk4gZm9yIHVzZSBpbiBtYWluIHN0YWNrXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0NlcnRpZmljYXRlQXJuJywge1xuICAgICAgdmFsdWU6IHRoaXMuY2VydGlmaWNhdGUuY2VydGlmaWNhdGVBcm4sXG4gICAgICBkZXNjcmlwdGlvbjogJ0FDTSBDZXJ0aWZpY2F0ZSBBUk4gZm9yIENsb3VkRnJvbnQnLFxuICAgICAgZXhwb3J0TmFtZTogJ1BvcnRmb2xpb0NlcnRpZmljYXRlQXJuJyxcbiAgICB9KTtcbiAgfVxufVxuIl19