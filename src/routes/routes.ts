import { Router } from 'express';
import { seriesRouter } from '../modules/series/series.routes';

const routes = Router();

routes.use('/series', seriesRouter);

export { routes };
