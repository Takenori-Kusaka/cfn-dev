import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as cloud9 from 'aws-cdk-lib/aws-cloud9';

export class CfnDevStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const cfnEnvironmentEC2 = new cloud9.CfnEnvironmentEC2(this, 'MyCfnEnvironmentEC2', {
      instanceType: 't2.micro',
    
      // the properties below are optional
      // automaticStopTimeMinutes: 10,
      // connectionType: 'CONNECT_SSM',
      // description: 'SSM Connect Test',
      // imageId: 'amazonlinux-2-x86_64',
      // name: 'SSM-Connect-Test',
      // ownerArn: 'ownerArn',
      // repositories: [{
      //   pathComponent: 'pathComponent',
      //   repositoryUrl: 'repositoryUrl',
      // }],
      // subnetId: 'subnetId',
      // tags: [{
      //   key: 'Name',
      //   value: 'SSM-Connect-Test',
      // }],
    });
  }
}