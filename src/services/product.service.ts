import { productApi } from "../api/productApi"
import { Inputs } from "../pages/RegisterProduct"

export const createProduct = async (inputs: Inputs) => {
  try {
    await productApi.createProduct(inputs)
  } catch (error) {
    console.log(error)
  }
}