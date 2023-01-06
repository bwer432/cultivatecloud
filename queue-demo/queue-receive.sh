#!/bin/bash
q=$(aws sqs list-queues --query "QueueUrls[0]" --output text)
aws sqs receive-message --queue-url $q --wait-time-seconds 20