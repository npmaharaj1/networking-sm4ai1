FROM alpine:latest
WORKDIR /app
COPY ./bomb.c .
COPY ./Makefile .
RUN make 
RUN apk update && apk add openssh clang make &&\
    sed -i -e 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config &&\
    ssh-keygen -A &&\
    mkdir -p /var/run/sshd &&\
CMD ["exec /usr/sbin/sshd -D"]
