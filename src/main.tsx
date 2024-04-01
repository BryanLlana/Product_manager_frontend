import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as loaderProducts } from './pages/Products'
import "@fontsource-variable/onest";
import './index.css'
import RegisterProduct, { action as actionRegisterProduct } from './pages/RegisterProduct'

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
