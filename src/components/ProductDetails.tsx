import { Product } from "../../types"

type Props = {
  product: Product
}

const ProductDetails = ({ product }: Props) => {
  const { id, name, price, availability } = product
  console.log(availability)
  return (
    <tr className="border-b">
      <td className="p-3 text-lg text-gray-800">
        { name }
      </td>
      <td className="p-3 text-lg text-gray-800">
        { price }
      </td>
      <td className="p-3 text-lg text-gray-800">
        { availability ? 'Disponible' : 'No disponible' }
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >Editar</button>
          <button
            className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >Eliminar</button>
        </div>
      </td>
    </tr>
  )
}

export default ProductDetails