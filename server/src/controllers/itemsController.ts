import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index (request: Request, response: Response) {
  
    const items = await knex('items').select('*');

    // Temporariamente deixar o endereço local, 
    // dps trocar para as confs de ambiente
    const enderecoLocal = '192.168.0.108';
  
    const serializedItems = items.map( item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${enderecoLocal}:3333/uploads/${item.image}`
      }
    });

    return response.json(serializedItems);
  }
  
}

export default ItemsController;