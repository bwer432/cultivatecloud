#!/usr/bin/env python3
# For python clients, we could use the Amazon SQS boto3 API:
# https://boto3.amazonaws.com/v1/documentation/api/latest/guide/sqs-example-sending-receiving-msgs.html
# This example is based on code copied from that reference.

import boto3
import sys

# Create SQS client
sqs = boto3.client('sqs')

queue_url = 'SQS_QUEUE_URL' # static default
if __name__ == "__main__":
    if len( sys.argv ) > 1:
        queue_url = sys.argv[1] # override default

# Receive message from SQS queue
response = sqs.receive_message(
    QueueUrl=queue_url,
    AttributeNames=[
        'SentTimestamp'
    ],
    MaxNumberOfMessages=1,
    MessageAttributeNames=[
        'All'
    ],
    VisibilityTimeout=0,
    WaitTimeSeconds=0
)

message = response['Messages'][0]
receipt_handle = message['ReceiptHandle']

# Delete received message from queue
sqs.delete_message(
    QueueUrl=queue_url,
    ReceiptHandle=receipt_handle
)
print('Received and deleted message: %s' % message)
