FROM alpine:latest
WORKDIR /app
COPY ./bomb.c .
COPY ./Makefile .
RUN apk update && apk add openssh gcc make &&\
    sed -i -e 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config &&\
    ssh-keygen -A &&\
    mkdir -p /var/run/sshd 
RUN make 
CMD ["exec /usr/sbin/sshd -D"]
