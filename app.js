const koa = require('ync-react-browserrouter-server');

const app = new koa();

const port = process.env.PORT || 6001;

app.start(port);
