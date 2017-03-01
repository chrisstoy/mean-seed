import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { HeroRouter } from './api/v1/heroes';

// Create the Express web server app
class App {

  public express: express.Application;

  constructor(
  ) {
    this.express = express();
    this.initMiddleware();
    this.initRoutes();
  }

  /**
   * Initialize the middleware we are using on this server
   */
  private initMiddleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private initRoutes(): void {

    this.express.use('/api/v1/heroes', new HeroRouter().router);

    // create default route that matches everything for now
    this.express.all('/ping', (req, res) => {
      res.send(`
        <!DOCTYPE html>
          <html>
            <head>
              <title>MEAN Test</title>
            </head>
            <body>
              <h1>PING</h1>
            </body>
          </html>
      `);
    });
  }
}

export default new App().express;
