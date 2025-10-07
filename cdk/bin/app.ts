#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();

new PortfolioStack(app, 'ManishMitraPortfolioStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.AWS_REGION || 'ap-southeast-2',
  },
  description: 'Manish Mitra Portfolio - S3 + CloudFront Static Website',
  tags: {
    Project: 'Portfolio',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

app.synth();
