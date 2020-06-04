import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/pointsController';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/items', async (request, response) => {
  const trx = await knex.transaction();

  const items = await trx('items').select('*');

  const serializedItems = items.map( item => {
    return {
      id: item.id,
      name: item.title,
      image_url: `http://localhost:333/uploads/${item.image}`
    }
  });

  await trx.commit();

  return response.json(serializedItems);
});

routes.post('/points', pointsController.create);

export default routes;