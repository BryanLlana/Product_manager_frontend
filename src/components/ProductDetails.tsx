import { ActionFunction, Form, redirect, useFetcher, useNavigate } from "react-router-dom"
import { Product } from "../types"
import { deleteProduct } from "../services/product.service"

type Props = {
  product: Product
}

export const action: ActionFunction = async ({ params }) => {
  await deleteProduct(+params.id!)
  return redirect('/')
}

const ProductDetails = ({ product }: Props) => {
  const { id, name, price, availability } = product
  const fetcher = useFetcher()
  const navigate = useNavigate()
  return (
    <tr className="border-b">
      <td className="p-3 text-lg text-gray-800">
        { name }
      </td>
      <td className="p-3 text-lg text-gray-800">
        { price }
      </td>
      <td className="p-3 text-lg text-gray-800">
        <fetcher.Form method="post">
          <button
            type="submit"
            name='id'
            value={id}
            className={`${availability ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
          >{availability ? 'Disponible' : 'No disponible'}</button>
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
            onClick={() => navigate(`/editar-producto/${id}`)}
          >Editar</button>
          <Form
            className="w-full" 
            method="post" 
            action={`/eliminar-producto/${id}`}
            onSubmit={e => {
              if (!confirm('¿Estás seguro de eliminar un producto?')) {
                e.preventDefault()
              }
            }}
          >
            <input
              type="submit"
              value='Eliminar'
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
            />
          </Form>
        </div>
      </td>
    </tr>
  )
}

export default ProductDetails