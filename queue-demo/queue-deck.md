---
marp: true
theme: default
class: invert
---

# Demo: Create an Amazon SQS Queue

- ***Why?*** I want to use a message queue in the AWS cloud.
- ***What?*** Use an AWS CDK environment.
- ***Where?*** In my AWS account.
- ***How?*** Use AWS CDK to create an Amazon SQS Queue.
- ***Then…*** I can send and receive messages via a message queue in my AWS account.

---

# Use CDK to deploy resources

## Purpose: Create a CDK stack with a queue

Steps:

1. Create a CDK app (`cdk init`).
2. Uncomment the Amazon SQS bits (`vi lib/queue-stack.ts`).
3. Deploy the CDK app (`cdk deploy`).
4. Send and receive queue messages.
5. Remove the CDK app (`cdk destroy`).

---

# Deploy a queue via CDK app stack

```
mkdir queue
cd queue
cdk init app --language=typescript
cdk deploy
aws sqs list-queues 
q=$(aws sqs list-queues --query "QueueUrls[0]" --output text)
aws sqs receive-message --queue-url $q --wait-time-seconds 20
aws sqs send-message --queue-url $q --message-body "hello, world" 
cdk destroy --force
```

---

# Amazon SQS Documentation

Queue code examples:
[Amazon SQS boto3 API](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/sqs-example-sending-receiving-msgs.html)
[Amazon SQS Python3 SQS code examples](https://docs.aws.amazon.com/code-library/latest/ug/python_3_sqs_code_examples.html)

---

# Deploy a queue via CDK app stack with Python clients

```
git clone https://github.com/bwer432/awsdemo
cd queue-demo/queue
npm install # repopulate node_modules
npx cdk deploy
aws sqs list-queues 
q=$(aws sqs list-queues --query QueueUrls --output text | grep QueueStack-QueueQueue)
aws sqs receive-message --queue-url $q --wait-time-seconds 20
aws sqs send-message --queue-url $q --message-body "hello, world" 
python3 ../sqs-send.py $q
python3 ../sqs-recv.py $q
npx cdk destroy --force
```

---
