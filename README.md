# Random Ideas

## Test QR
![](./frame.png)

## TODO
- Players scan qr code and navigate to hacked website
- Players do a directory scan of that website with a wordlist and discover a /admin page
- Players try common credentials such as username: admin and password: password123!
- When looking inside the admin panel, users discover a novnc shell page in which they can access the host device
- Players try to find out how this machine got hacked and discover an ssh history from a specified ip address (some ssh log)
- Players do an nmap scan and discover an ftp port (21) is open and allows anonymous access
- Players do this to gain an ssh key pair so they now have access to the "hackers" pc
- Players discover a bomb.o file which allegedly is responsible for the mass data deletion.
- Upon solving the file, users discover that they are not on the real bomb.o
- Players scan the provided ip address and brute force their way into the real pc and nullify the threat

## Development and Deployment
This project makes use of `docker compose` (not tested with `docker-compose`).
To deploy, clone this repository then run

```bash
sudo docker compose up -d --build
```

install bash

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
