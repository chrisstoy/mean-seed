import { Router, Request, Response, NextFunction } from 'express';

const HEROES = require('../../../data/hero-data');

export class HeroRouter {
  public router: Router;

  constructor(
  ) {
    this.router = Router();
    this.init();
  }

  /**
   * GET all heroes
   **/
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(HEROES);
  }

  /////////////////

  /**
   * Take each handler, and attach to one of the Express.Router's endpoints
   */
  private init() {
    this.router.get('/', this.getAll);
  }
}

