import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

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
    let router = express.Router();
    router.get('/test', (req, res, next) => {
      res.json({
        message: 'Hello from REST API',
      });
    });
    this.express.use('/api', router);

    // create default route that matches everything for now
    this.express.all('/*', (req, res) => {
      res.send(`
        <!DOCTYPE html>
          <html>
            <head>
              <title>MEAN App</title>
            </head>
            <body>
              <h1>Hello MEAN app</h1>
            </body>
          </html>
      `);
    });
  }
}

export default new App().express;
