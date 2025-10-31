FROM debian:trixie
WORKDIR /assets

ENV DEBIAN_FRONTEND=noninteractive

COPY ./flag.gif /home/app/flag.gif
RUN apt update && apt upgrade -y && apt install bash exiftool iputils-ping openssh-server -y && \
    useradd app && \
    echo "app:456789"| chpasswd && \
    ssh-keygen -A && \
    mkdir -p /var/run/sshd && \
    mkdir -p /home/app && \
    sed -i -e 's/#PasswordAuthentication yes/PasswordAuthentication yes/g' /etc/ssh/sshd_config

EXPOSE 2222
EXPOSE 22
CMD [ "/bin/bash", "-l", "-c", "/usr/sbin/sshd -D" ]
