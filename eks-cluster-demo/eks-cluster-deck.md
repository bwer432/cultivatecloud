---
marp: true
theme: default
class: invert
---

# Demo: Create EKS Cluster

- ***Why?*** I want to deploy Kubernetes in the cloud.
- ***What?*** Use Amazon Elastic Kubernetes Service (Amazon EKS).
- ***Where?*** In my AWS account.
- ***How?*** Use AWS CDK to deploy Amazon EKS.
- ***Then…*** I can use Kubernetes resources in AWS.

---

# Deploy an Amazon EKS cluster

## Purpose: Get Kubernetes with a managed control plane

Steps:

1. Borrow AWS Samples CDK Example for EKS cluster.
2. Deploy EKS cluster.
3. Adjust Managed Node Group capacity.
4. Re-deploy the CDK app (`cdk deploy`).
5. Add Fargate profile.
6. Re-deploy the CDK app (`cdk deploy`).
7. Use the resources throughout their intended lifecycle.

---

# Borrow AWS Samples CDK Example for EKS cluster

```
git clone https://github.com/bwer432/cultivatecloud
cd cultivatecloud/eks-cluster-demo
git clone https://github.com/aws-samples/aws-cdk-examples
cp -R aws-cdk-examples/typescript/eks/cluster ./eks-cluster
rm -rf aws-cdk-examples
cd eks-cluster
```

---

# Deploy EKS cluster.

```
git clone https://github.com/bwer432/cultivatecloud
cd cultivatecloud/eks-cluster-demo/eks-cluster
npm install 
npm run build
npx cdk deploy
```

---

# Adjust Managed Node Group capacity

```
diff ../index-capacity.ts index.ts
cp ../index-capacity.ts index.ts
npm run build
npx cdk deploy 
```

---

# Add Fargate profile.

```
diff ../index-fargate.ts index.ts
cp ../index-fargate.ts index.ts
npm run build
npx cdk deploy 
```

---

# Destroy EKS cluster.

```
kubectl get service -A -o jsonpath='{range .items[?(@.spec.type=="LoadBalancer")]}{.metadata.name}{" -n "}{.metadata.namespace}{"\n"}{end}' | xargs -I % sh -c "kubectl delete service %"
npx cdk destroy -f
```

---

# AWS CDK EKS Construct documentation

EKS documentation:
- [Amazon EKS Construct Library](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks-readme.html)
- [`class Cluster`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.Cluster.html)
- [`class FargateProfile`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.FargateProfile.html)
- [`class FargateProfileProps`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.FargateProfileProps.html)
- [`interface Selector`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.Selector.html)
