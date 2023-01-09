---
marp: true
theme: default
class: invert
---

# Demo: Create a static website

- ***Why?*** I want to create a serverless static website.
- ***What?*** Use an Amazon S3 bucket and Amazon CloudFront distribution.
- ***Where?*** In my AWS account.
- ***How?*** Use AWS CDK to deploy the bucket, policy, access identity, distribution, certificate, DNS record.
- ***Then…*** I can host a website using Amazon S3.

---

# Deploy a static website

## Purpose: Show relationships between resources in the stack

Steps:

1. Clone AWS Samples example of static site.
2. Extract that one example for demonstration.
3. Deploy the static site using CDK *context* values.
4. Use the static site.

---

# Borrow an example

```
git clone https://github.com/bwer432/awsdemo
cd awsdemo/static-site-demo
git clone https://github.com/aws-samples/aws-cdk-examples
cp -R aws-cdk-examples/typescript/static-site ./static-site
rm -rf aws-cdk-examples
cd static-site
ls
```

# Deploy a static website

```
git clone https://github.com/bwer432/awsdemo
cd awsdemo/static-site-demo/static-site
npm install 
npm run build
accountId=$(aws sts get-caller-identity --query Account --output text)
aws route53 list-hosted-zones --query "HostedZones[].Name"
zone=$(aws route53 list-hosted-zones --query "HostedZones[0].Name" --output text | sed 's@\.$@@')
npx cdk deploy -c accountId=$accountId -c domain=$zone -c subdomain=www
```

---

# Clean up

Delete the stack when you are done. 
- Redefine the `accountId` and `zone` variables if in a new shell session.
- Use `cdk destroy` with the *same context values* as you used on the `deploy`.

```
npx cdk destroy -c accountId=$accountId -c domain=$zone -c subdomain=www -f
```
