import http from 'http';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import controllers from './controllers';

import logger from './utils/logger';
import config from '../config.json';

const app = express();

app.set('port', config.port);
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/../www`));

app.use(session({ secret: config.secret }));
app.use(bodyParser.json());

app.use(controllers);

http.createServer(app).listen(config.port, () => {
    logger.info(`Express server listening on port ${config.port}`);
});
