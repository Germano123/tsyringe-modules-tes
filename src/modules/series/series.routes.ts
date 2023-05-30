import { Router } from 'express';
import { container } from 'tsyringe';
import { SeriesService } from './series.service';

const seriesRouter = Router();

const userService = container.resolve(SeriesService);

seriesRouter.post('/series/create-series', userService.create);
seriesRouter.get('/series/get-series/:id', () => {
    console.log("been here");
    
    return userService.get('1');
});

seriesRouter.get('/series/get-all-series', userService.getAll);
seriesRouter.post('/series/update-series', userService.update);
seriesRouter.post('/series/remove-series', userService.delete);

export { seriesRouter };
