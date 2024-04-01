export type Product = {
  id: number,
  name: string,
  price: number,
  availability: boolean
}

export type ProductEdit = {
  name: string, 
  price: string,
  availability: string
}