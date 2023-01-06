#!/bin/bash
q=$(aws sqs list-queues --query "QueueUrls[0]" --output text)
while :
do 
  echo "waiting..."
  aws sqs receive-message --queue-url $q --wait-time-seconds 5
done
