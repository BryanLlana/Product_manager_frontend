import { Link } from 'react-router-dom'

const Products = () => {
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
    </>
  )
}

export default Products