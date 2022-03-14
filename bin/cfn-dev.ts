#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CfnDevStack } from '../lib/cfn-dev-stack';

const app = new cdk.App();
new CfnDevStack(app, 'CfnDevStack');
