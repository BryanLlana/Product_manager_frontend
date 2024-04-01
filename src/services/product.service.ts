import { productApi } from "../api/productApi"
import { Inputs } from "../pages/RegisterProduct"
import { Product, ProductEdit } from '../types/index';

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

export const getProduct = async (id: number): Promise<Product | undefined> => {
  try {
    const { data } = await productApi.getProduct(id)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = async (id: number, data: ProductEdit) => {
  try {
    await productApi.updateProduct(id, data)
  } catch (error) {
    console.log(error)
  }
}