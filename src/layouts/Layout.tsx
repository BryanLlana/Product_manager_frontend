import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='bg-slate-800'>
        <div className='mx-auto max-w-6xl py-10'>
          <h1 className='text-center md:text-left text-4xl font-extrabold text-white'>
            Administrador de productos
          </h1>
        </div>
      </header>
      <main className='mt-10 mx-auto max-w-6xl px-5 bg-white shadow py-5'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout