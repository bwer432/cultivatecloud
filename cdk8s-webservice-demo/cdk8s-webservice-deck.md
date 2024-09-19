---
marp: true
theme: default
class: invert
---

# Demo: Install CDK8s CLI

- ***Why?*** I want to deploy Kubernetes resources.
- ***What?*** Use the Cloud Development Kit for Kubernetes (`CDK8s`)
- ***Where?*** In my AWS account.
- ***How?*** Install AWS CDK8s CLI and test k8s manifest synthesis.
- ***Then…*** I can use Kubernetes resources in my Kubernetes cluster(s).

---

# Install and test CDK8s CLI

## Purpose: Get command line tools for Cloud Development Kit for Kubernetes

Steps:

1. Install CDK8s CLI.
2. Create example app folder.
3. Initialize CDK8s app folder (`cdk8s init`).
4. Synthesize Kubernetes YAML for app (`cdk8s synth`).

---

# Install CDK8s CLI

```
sudo npm install -g cdk8s-cli
which cdk8s
```

---

# Make example CDK8s app

```
git clone https://github.com/bwer432/cultivatecloud
cd cultivatecloud/cdk8s-install-demo
mkdir -p cdk8s-hello
cd cdk8s-hello
npx cdk8s init typescript-app
cat main.ts
```

---

# Synthesize Kubernetes YAML manifest

```
npm run compile
npx cdk8s synth
cat dist/construct-metadata.json && echo
cat dist/cdk8s-hello.k8s.yaml
wc dist/cdk8s-hello.k8s.yaml
```

---

# AWS CDK8s documentation

CDK8s documentation:
- [Getting started with CDK8s](https://cdk8s.io/docs/latest/getting-started/)
