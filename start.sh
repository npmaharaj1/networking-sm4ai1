#!/usr/bin/env bash

cd vm/
if [[ "$1" == "deploy" ]]; then
    sudo docker compose up -d --build
elif [[ "$1" == "destroy" ]]; then
    sudo docker rm -f $(sudo docker ps -aq) # Will error out here if not using
    sudo docker network prune               # compose because of unassigned ADDRESS var
else
    echo "Use ./start.sh deploy|destroy"
fi