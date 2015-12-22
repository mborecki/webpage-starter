# webpage-starter
WebPage starter

Uses:
 - webpack + babel - ES6 compilation
 - node-sass - CSS compilation
 - express - nodejs HTTP server
 - bash - for some scripts
 
npm scripts:
- webpack - compiles es6.js files to bundle.js
- webpack-watch - same as webpack + watch for changes in files
- sass - compiles scss files to bundle.css
- sass-watch - same as webpack + watch for changes in files
- build - compiles all and copy files to /dist directory
- watch - webpack-watch + sass-watch
- server-start - starts server
- server-watch - starts server and restart after file changed
 
Server configuration file /app/config.json

```javascript
{
  // server port
  "SERVER_POST": 8080
}
```
