FROM debian:trixie
WORKDIR /assets

COPY ./flag.gif /home/app/flag.gif
RUN apt update && apt upgrade -y && apt install bash exiftool iputils-ping openssh-server -y && \
    useradd app && \
    echo "app:871005" | chpasswd && \
    ssh-keygen -A && \
    mkdir -p /var/run/sshd && \
    mkdir -p /home/app && \
    sed -i -e 's/#PasswordAuthentication yes/PasswordAuthentication yes/g' /etc/ssh/sshd_config

EXPOSE 2222
CMD [ "/bin/bash", "-l", "-c", "/usr/sbin/sshd -D" ]
