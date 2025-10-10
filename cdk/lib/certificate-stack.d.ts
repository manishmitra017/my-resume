import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';
export interface CertificateStackProps extends cdk.StackProps {
    domainName: string;
    hostedZoneId: string;
    hostedZoneName: string;
}
export declare class CertificateStack extends cdk.Stack {
    readonly certificate: acm.Certificate;
    constructor(scope: Construct, id: string, props: CertificateStackProps);
}
