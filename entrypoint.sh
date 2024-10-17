#!/bin/sh
envsubst '$BACK_URL' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf 
exec "$@"