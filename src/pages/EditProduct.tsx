import { Link, Form, ActionFunction, useActionData, redirect, LoaderFunction, useLoaderData } from 'react-router-dom';
import Error from '../components/Error';
import { createProduct, getProduct } from '../services/product.service';
import { Product } from '../types';

export type Inputs = {
  name: string,
  price: string
}

export const loader: LoaderFunction = async ({ params }) => {
  try {
    return await getProduct(Number(params.id))
  } catch (error) {
    return redirect('/')
  }
}

export const action: ActionFunction = async ({ request }) => {
  const inputs = Object.fromEntries(await request.formData()) as Inputs
  const errors: { [key: string]: any } = {}

  if (!inputs.name) errors.name = 'El nombre es obligatorio'
  if (!Number(inputs.price)) errors.price = 'El precio es obligatorio'
  if (Object.values(errors).length > 0) return errors

  await createProduct(inputs)
  return redirect('/')
}

const availabilityOptions = [
  { name: 'Disponible', value: true},
  { name: 'No Disponible', value: false}
]

const EditProduct = () => {
  const product = useLoaderData() as Product
  console.log(product)
  const errors = useActionData() as { name: string, price: string }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-slate-500">Editar Producto</h2>
        <Link
          to='/'
          className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700'
        >Volver
        </Link>
      </div>

      <Form
        className="mt-10"
        method='POST'
      >

        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="name"
          >Nombre Producto:</label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
            defaultValue={product.name}
          />
          {errors?.name && <Error>{errors?.name}</Error>}
        </div>
        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="price"
          >Precio:</label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            min={0}
            name="price"
            defaultValue={product.price}
          />
          {errors?.price && <Error>{errors?.price}</Error>}
        </div>

        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="availability"
          >Disponibilidad:</label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product.availability.toString()}
          >
            {availabilityOptions.map(option => (
              <option key={option.name} value={option.value.toString()}>{option.name}</option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Guardar Cambios"
        />
      </Form>
    </>
  )
}

export default EditProduct