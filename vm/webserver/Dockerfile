FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs/
COPY ./docs/ ./
RUN apk update; apk add npm; cd /usr/local/apache2/htdocs/admin; npm install @xterm/xterm
CMD ["httpd-foreground"]
