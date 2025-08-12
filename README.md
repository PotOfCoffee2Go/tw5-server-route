## @PotOfCoffee2Go/tw5-server-route

This is a working [TiddlyWiki](https://tiddlywiki.com) example of adding a custom server request to [TiddlyWiki on Node.js](https://tiddlywiki.com/static/TiddlyWiki%2520on%2520Node.js.html) 'server' edition.  It uses the HTTP connection that is established by [WebServer](https://tiddlywiki.com/static/WebServer.html) to route the request to the server. Two TW5 JavaScript tiddlers do the work - client-side is a `module-type:macro`  while the server-side uses a `module-type:route`.

See [client side](https://github.com/PotOfCoffee2Go/tw5-server-route/blob/main/tiddlers/%24__poc2go_macros_custom_server_request.js) and the [server-side](https://github.com/PotOfCoffee2Go/tw5-server-route/blob/main/tiddlers/%24__poc2go_modules_custom_server_route.js) tiddlers.

> This project assumes you are a TW5 JavaScript developer familiar with TW5 JavaScript `macro` and `route` module-types. However, is a working system that is relatively easy to modify, so a good place to learn about TiddlyWiki modules!

No TiddlyWiki `$:/core` tiddlers were harmed in making of tw5-server-route.

It relies on Webserver, Filesystem, TiddlyWeb, adaptors, syncer, etc. to all run as designed out-of-the-box.

### Install
It is assumed Git, Node.js, and TiddlyWiki are already installed.

```
git clone https://github.com/PotOfCoffee2Go/tw5-server-route.git
tiddlywiki tw5-server-route --listen port=8080
```

Go to http://localhost:8080 in browser.

### Uninstall
Delete the `tw5-server-route` directory - is just a TiddlyWiki!

