#!/bin/bash
q=$(aws sqs list-queues --query "QueueUrls[0]" --output text)
aws sqs send-message --queue-url $q --message-body "hello, world" 