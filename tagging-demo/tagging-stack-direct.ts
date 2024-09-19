import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Tag, Tags } from 'aws-cdk-lib';

export class TaggingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'TaggingQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    // add standard tags to resource
    Tags.of(this).add('project', 'tagging-demo');
    Tags.of(this).add('environment', 'demo');
    Tags.of(this).add('owner', 'cultivatecloud');
    Tags.of(this).add('department', '1234');
  }
}
