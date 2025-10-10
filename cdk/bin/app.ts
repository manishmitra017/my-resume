#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';
import { CertificateStack } from '../lib/certificate-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT || '147845228831';
const domainName = 'manishmitra.com';

// Hardcoded certificate ARN from the deployed certificate stack
const certificateArn = 'arn:aws:acm:us-east-1:147845228831:certificate/1e82f62b-a050-4dfe-948c-c4fd2f3eabed';

// Create main stack in ap-southeast-2 with Route53 hosted zone and custom domain
const portfolioStack = new PortfolioStack(app, 'ManishMitraPortfolioStack', {
  env: {
    account: account,
    region: 'ap-southeast-2',
  },
  crossRegionReferences: true, // Enable cross-region references
  certificateArn: certificateArn, // Use the validated certificate
  description: 'Manish Mitra Portfolio - Route53 + S3 + CloudFront Static Website',
  tags: {
    Project: 'Portfolio',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

app.synth();
