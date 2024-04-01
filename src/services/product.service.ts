import { productApi } from "../api/productApi"
import { Inputs } from "../pages/RegisterProduct"
import { Product } from '../../types/index';

export const createProduct = async (inputs: Inputs) => {
  try {
    await productApi.createProduct(inputs)
  } catch (error) {
    console.log(error)
  }
}

export const getProducts = async (): Promise<Product[] | undefined> => {
  try {
    const { data } = await productApi.getProducts()
    return data
  } catch (error) {
    console.log(error)
  }
}