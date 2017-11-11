import * as Express from 'express';
import Path = require('path');
import * as morgan from 'morgan';
import * as session from 'express-session';
import { InversifyExpressServer } from 'inversify-express-utils';

// IoC
import { container } from './ioc-container';
import { logger } from './utils';

import { AppConfig } from '../config/app-config';

// start the server
const server = new InversifyExpressServer(container);
server.setConfig((App: any) => {

  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const compress = require('compression');
  const methodOverride = require('method-override');

  App
    .use(cookieParser())
    .use(compress({}))
    .use(methodOverride())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true
    }))
    .use(session({
      secret: 'AUTH_SECRET',
      name: 'pp-cookie',
      resave: true,
      saveUninitialized: false
    }))
    .use(morgan('combined', { stream: logger.stream }))
    .use('/apidoc', Express.static('apidoc'));
});

const app = server.build();

// Starts the app
if (process.env.NODE_ENV !== 'unit-test') {
  logger.info('Starting apps...');
  app.listen(AppConfig.port);
}
export { app };
