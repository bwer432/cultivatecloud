---
marp: true
theme: default
class: invert
---

# Demo: Bootstrap an AWS CDK Environment

- ***Why?*** 
  I want to automate resource deployment in the AWS cloud.
- ***What?*** 
  Create an AWS CDK environment.
- ***Where?*** 
  In my AWS account.
- ***How?*** 
  Use AWS Cloud Shell.
- ***Then…*** 
  I can use AWS CDK to deploy and destroy AWS resources in my account(s).

---

# Use AWS Cloud Shell for AWS CDK

## Purpose: Create an AWS CDK environment.

Steps:

1. Sign into your AWS account.
2. Launch AWS CloudShell.
3. Confirm tools for AWS Cloud Development Kit (AWS CDK).
4. Bootstrap AWS account for CDK.
5. Deploy, destroy, repeat.

---

# Bootstrap AWS CDK

```
cdk bootstrap
```

Specify an environment name like 'aws://123456789012/us-east-1', or run in a directory with 'cdk.json'.

```
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo $AWS_ACCOUNT_ID 
echo $AWS_REGION
echo aws://$AWS_ACCOUNT_ID/$AWS_REGION
cdk bootstrap aws://$AWS_ACCOUNT_ID/$AWS_REGION  
```

---

# Use AWS CDK to deploy and destroy AWS resources 

## Purpose: Automate resource deployment in the AWS cloud.

- Check AWS CDK documentation.
- Check other `awsdemo` demonstrations.

---

# Remove CDK bootstrap

## Purpose: Remove CDK environment if no longer needed.

Steps:

1. Remove CDKToolkit stack with CloudFormation.
2. Remove CDK bootstrap bucket.

---

# Unbootstrap AWS CDK

```
aws cloudformation list-stacks --query "StackSummaries[?StackName=='CDKToolkit'&&StackStatus=='CREATE_COMPLETE']"
aws cloudformation delete-stack --stack-name CDKToolkit
cdkbucket=$(aws s3 ls | grep cdk- | awk '{printf $3}')
echo $cdkbucket
aws s3api delete-objects --bucket $cdkbucket \ 
  --delete "$(aws s3api list-object-versions \
  --bucket $cdkbucket \
  --output=json \
  --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"
aws s3api delete-bucket --bucket $cdkbucket
```
