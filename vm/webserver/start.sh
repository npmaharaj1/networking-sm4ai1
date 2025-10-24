#!/bin/sh

sudo docker rm -f $(sudo docker ps -aq)
sudo docker compose up -d
sudo docker compose logs --follow
