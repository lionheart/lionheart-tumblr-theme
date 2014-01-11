#!/bin/bash

s3cmd sync * --exclude *.un~ --exclude .git --exclude tags --exclude *.sh s3://lionheart-tumblr -P
