import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as loaderProducts } from './pages/Products'
import RegisterProduct, { action as actionRegisterProduct } from './pages/RegisterProduct'
import EditProduct, { action as actionEditProduct, loader as loaderEditProduct } from './pages/EditProduct'
import "@fontsource-variable/onest";
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loaderProducts
      },
      {
        path: '/nuevo-producto',
        element: <RegisterProduct />,
        action: actionRegisterProduct
      },
      {
        path: '/editar-producto/:id',
        element: <EditProduct />,
        loader: loaderEditProduct,
        action: actionEditProduct
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
