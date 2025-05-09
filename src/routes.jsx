import { createBrowserRouter } from "react-router-dom"

import Home from './pages/Home'


const router = createBrowserRouter([
          {
        path:'/',
        element: <Home/>

          },

      {
        path: '/lista-de-usuarios',
        element: <listUsers />

      }

])

export default router

