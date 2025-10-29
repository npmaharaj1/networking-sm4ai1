#!/bin/sh

rm ~/.ssh/known_hosts
sudo docker image prune
sudo docker image build -t therealdevice .
sudo docker compose down
sudo docker compose up -d
sudo docker compose logs --follow
