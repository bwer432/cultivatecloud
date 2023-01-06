---
marp: true
theme: default
class: invert
---

# Demo: Create CDK resources with tags

- ***Why?*** I want to organize cloud resources, track cost allocation, improve automation, and enhance access control.
- ***What?*** Use resource tags on AWS cloud resources.
- ***Where?*** In my AWS account.
- ***How?*** Use AWS CDK to tag resources.
- ***Then…*** I can better manage cloud resources in my AWS accounts.

---

# Use tags on CDK resources

## Purpose: Simplify and enhance cloud resource management

Steps:

1. Check for presence of tags on existing CDK deployment.
2. Add tags in code. (`lib/tagging-stack.ts`).
3. Re-deploy the CDK app (`cdk deploy`).
4. Confirm tags.
5. Use the resources throughout their intended lifecycle.

---

# Add tags to a CDK app definition

```
git clone https://github.com/bwer432/awsdemo
cd awsdemo/tagging-demo/tagging
npm install # repopulate node_modules
npx cdk deploy
vi lib/tagging-stack.ts # show pre-tags baseline
cp ../tagging-stack-direct.ts lib/tagging-stack.ts
npx cdk deploy # then show results and/or source
cp ../tagging-stack-via-map.ts lib/tagging-stack.ts
npx cdk deploy # then show results and/or source
```

---

# AWS Tagging Documentation

Tagging documentation:
[Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
[Filtering AWS CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html)
