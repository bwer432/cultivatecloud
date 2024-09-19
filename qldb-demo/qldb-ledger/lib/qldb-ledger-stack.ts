import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_qldb as qldb } from 'aws-cdk-lib';

export class QldbLedgerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Derived from example at:
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_qldb.CfnLedger.html
    const cfnLedger = new qldb.CfnLedger(this, 'VehicleRegistrationLedger', {
      permissionsMode: 'STANDARD',
    
      // the properties below are optional
      deletionProtection: false,
      name: 'vehicle-registration',
      tags: [
        { key: 'project', value: 'cultivatecloud', },
        { key: 'env', value: 'demo' },
      ],
    });

  }
}
