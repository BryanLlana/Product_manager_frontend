import { api } from '../lib/axios';
import { Inputs } from '../pages/RegisterProduct';

export const productApi = {
  createProduct: async (data: Inputs) => {
    return await api.post('/products', data)
  }
}