# FROM httpd:alpine
FROM seigetsu/httpd-sshd:2.4-alpine
WORKDIR /usr/local/apache2/htdocs/
EXPOSE 80
EXPOSE 22
COPY ./docs/ ./
CMD ["httpd-foreground"]
