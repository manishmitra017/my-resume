#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const portfolio_stack_1 = require("../lib/portfolio-stack");
const app = new cdk.App();
new portfolio_stack_1.PortfolioStack(app, 'ManishMitraPortfolioStack', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsNERBQXdEO0FBRXhELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLElBQUksZ0NBQWMsQ0FBQyxHQUFHLEVBQUUsMkJBQTJCLEVBQUU7SUFDbkQsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO1FBQ3hDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxnQkFBZ0I7S0FDbkQ7SUFDRCxXQUFXLEVBQUUseURBQXlEO0lBQ3RFLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFdBQVcsRUFBRSxZQUFZO0tBQzFCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFBvcnRmb2xpb1N0YWNrIH0gZnJvbSAnLi4vbGliL3BvcnRmb2xpby1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbm5ldyBQb3J0Zm9saW9TdGFjayhhcHAsICdNYW5pc2hNaXRyYVBvcnRmb2xpb1N0YWNrJywge1xuICBlbnY6IHtcbiAgICBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULFxuICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQVdTX1JFR0lPTiB8fCAnYXAtc291dGhlYXN0LTInLFxuICB9LFxuICBkZXNjcmlwdGlvbjogJ01hbmlzaCBNaXRyYSBQb3J0Zm9saW8gLSBTMyArIENsb3VkRnJvbnQgU3RhdGljIFdlYnNpdGUnLFxuICB0YWdzOiB7XG4gICAgUHJvamVjdDogJ1BvcnRmb2xpbycsXG4gICAgT3duZXI6ICdNYW5pc2ggTWl0cmEnLFxuICAgIEVudmlyb25tZW50OiAnUHJvZHVjdGlvbicsXG4gIH0sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=