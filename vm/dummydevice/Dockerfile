FROM alpine:latest
WORKDIR /app
COPY ./bomb.c .
COPY ./Makefile .
RUN apk update && apk add openssh gcc build-base libc-dev make &&\
    sed -i -e 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config &&\
    ssh-keygen -A &&\
    mkdir -p /var/run/sshd &&\
    make 
CMD ["/usr/sbin/sshd -D"]
