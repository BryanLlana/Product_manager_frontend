import { Product } from '../types';
import { api } from '../lib/axios';
import { Inputs } from '../pages/RegisterProduct';

export const productApi = {
  createProduct: async (data: Inputs) => {
    return await api.post('/products', data)
  },
  getProducts: async () => {
    return await api.get<Product[]>('/products')
  },
  getProduct: async (id: number) => {
    return await api.get<Product>(`/products/${id}`)
  }
}