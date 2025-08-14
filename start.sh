#!/usr/bin/env bash

cd vm/
if [[ "$1" == "deploy" ]]; then
    export COUNT=254
    while (( $COUNT > 1 )); do
        response=$(sudo arp-scan 10.1.1.$COUNT | grep responded | awk '{print $(NF-1)}')
        if [[ $response == '0' ]]; then

            echo 'Using $COUNT'

            sudo ip link add sm4ai1_bridge type bridge
            sudo ip addr add 10.1.1.$COUNT dev sm4ai1_bridge

            ADDRESS=254; bash -c "sudo docker compose up -d --build; echo $ADDRESS"

            exit
        fi
        : $((COUNT--))
    done

elif [[ "$1" == "destroy" ]]; then
    sudo ip link delete sm4ai1_bridge
    sudo docker rm -f $(sudo docker ps -aq) # Will error out here if not using
    sudo docker network prune               # compose because of unassigned ADDRESS var
else
    echo "Use ./start.sh deploy|destroy"
fi


