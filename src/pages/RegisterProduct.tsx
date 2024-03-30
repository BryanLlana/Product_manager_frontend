import { Link, Form, ActionFunction, useActionData } from 'react-router-dom';
import Error from '../components/Error';

type Inputs = {
  name: string,
  price: string
}

export const action: ActionFunction = async ({ request }) => {
  const inputs = Object.fromEntries(await request.formData()) as Inputs
  const errors: {[key: string]: any} = {}

  if (!inputs.name) errors.name = 'El nombre es obligatorio'
  if (!Number(inputs.price)) errors.price = 'El precio es obligatorio'
  if (Object.values(errors).length > 0) return errors 

  
  
  return {}
}

const RegisterProduct = () => {
  const errors = useActionData()

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-slate-500">Registrar Producto</h2>
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
          />
          { errors?.name && <Error>{errors?.name}</Error>}
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
          />
          { errors?.price && <Error>{errors?.price}</Error>}
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  )
}

export default RegisterProduct