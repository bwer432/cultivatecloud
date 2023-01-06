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

# Send message to SQS queue
response = sqs.send_message(
    QueueUrl=queue_url,
    DelaySeconds=10,
    MessageAttributes={
        'Title': {
            'DataType': 'String',
            'StringValue': 'The Whistler'
        },
        'Author': {
            'DataType': 'String',
            'StringValue': 'John Grisham'
        },
        'WeeksOn': {
            'DataType': 'Number',
            'StringValue': '6'
        }
    },
    MessageBody=(
        'Information about current NY Times fiction bestseller for '
        'week of 12/11/2016.'
    )
)

print(response['MessageId'])
