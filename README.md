# Random Ideas

## Test QR
![](./frame.png)

## TODO
QR code to supposed rick asley link prank thing \
People visit the website \
After 5 - 10 seconds of idle, the site glitches and changes to a message \
Message notifies viewer that they have until a due date to stop data deletion \
Players will find the device that handles the data deletion \
Players must defuse the "bomb" \
Automated message appears saying that the real bomb is on the perpetrator's computer \
Players use forensic skills to disarm his computer \

## Development and Deployment
This project makes use of `Dockerfile` and `containerlab`. \
To deploy this challenge, do the following \
Build the docker image with:

```bash
sudo docker build -t networking-sm4ai1_webserver:latest .
```

Then deploy topology with

```bash
sudo containerlab deploy -t vm/topology.clab.yaml
```
