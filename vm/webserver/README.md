# ssheasy

Source repositorty of the online ssh, sftp client [ssheasy.com](https://ssheasy.com)

## Building, running locally

`docker-compose up`

This will compile the wasm ssh, sftp client, the proxy component that proxies tcp connections for the client running in the browser through websocket and sets up nginx server serving the web frontend.
Additionaly prometheus and grafana is set up as well to monitor the connections proxied. An sshd is also started in a container for testing.

### connect endpoint

Use `/connect?host=HOST&port=PORT&user=USER&password=PASSWORD` for initiating connection right away after opening the url.


| Parameter      | Description                                 | Default Value |
|----------------|---------------------------------------------|--------------|
| `host`         | SSH server hostname or IP address           | –            |
| `port`         | SSH server port                             | 22           |
| `user`         | SSH username                                | –            |
| `password`     | SSH password                                | –            |
| `pk`           | Private key (as string, for key auth)       | –            |
| `webauthnKey`  | WebAuthn key ID (for WebAuthn auth)         | -1           |
| `connect`      | Whether to auto-connect (`"true"`/`"false"`) | "true"      |

*Notes:*
- `host` is mandatory if `connect` is `"true"` (or not provided).
- If `connect` is `"false"`, the connection will not auto-initiate, but the provided connection data will be filled in the connection form.


## Testing

For testing docker-compose sets up an sshd in a separate container. After starting up the stack with `docker-compose up` open http://localhost:8080 in your browser and use the host testssh with user root and password root.

### Testing Webauthn

After building the project and creating a webauthn key copy the displayed public key to the `ssh_conf/authorized_keys` file and start the testopenssh service in the docker compose if you have not started it yet. User name is `linuxserver.io` hostname: `testopenssh` port: `2222`.  

## Project structure

* nginx: web server config, Dockerfile for building the wasm ssh/sftp client
* proxy: golang proxy service for tunneling tcp connections through websocket
* web: source of the ssh, sftp wasm client, and the httml for the frontend

### Filemanager UI

The filemanager is based on [forked version](https://github.com/hullarb/angular-filemanager)) of [angular-filemanager](https://github.com/joni2back/angular-filemanager). The fork replaces the backend api calls with calls to the wasm sftp client.
The fork has to be built separately and copied to the *web/html/node_modules* directory.
