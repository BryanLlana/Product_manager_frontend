import { ActionFunction, Link, useLoaderData } from 'react-router-dom'
import { getProducts, updateAvailability } from '../services/product.service'
import { Product } from '../types'
import ProductDetails from '../components/ProductDetails'

export const loader = async () => {
  return await getProducts()
}

export const action: ActionFunction = async ({ request }) => {
  const { id } = Object.fromEntries(await request.formData())
  await updateAvailability(+id)
  return {}
}

const Products = () => {
  const products = useLoaderData() as Product[]

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to='/nuevo-producto'
          className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700'
        >Agregar producto
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products