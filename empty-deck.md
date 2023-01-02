---
marp: true
theme: default
class: invert
---

# Demo: Use an AWS CDK Environment

- ***Why?*** I want to practice resource deployment in the AWS cloud.
- ***What?*** Use an AWS CDK environment.
- ***Where?*** In my AWS account.
- ***How?*** Use AWS CDK to create an AWS CloudFormation stack, then delete it.
- ***Then…*** I know how to use AWS CDK to deploy and destroy AWS resources in my account(s).

---

# Use CDK to deploy resources

## Purpose: Deploy an empty stack

Steps:

1. Create a CDK app (`cdk init`).
2. Deploy the CDK app (`cdk deploy`).
3. *Use the cloud app resources*.
4. Remove the CDK app (`cdk destroy`).

---

# Deploy an "empty" CDK app stack

```
mkdir empty
cd empty
cdk init app --language=typescript
cdk deploy
cdk destroy
```
