import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TaggingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Tagging is fundamental
    var tagMap = new Map<string,string>();
    // add standard tags to resource (or read from file, app parameters)
    tagMap.set("project", "tagging-demo");
    tagMap.set("environment", "demo");
    tagMap.set("owner", "awsdemos");
    tagMap.set("department", "9876");

    // example resource
    const queue = new sqs.Queue(this, 'TaggingQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    // add tags to resource (whole stack of resources)
    var thisStack = this; // because thisArg not in our forEach
    tagMap.forEach(
      function(value,key){
        Tags.of(thisStack).add(`${key}`, `${value}`);
      }
    );
  }
}
