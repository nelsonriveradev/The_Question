import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './Pages/MainPage/MainPage'
import Confirmation from './Pages/Confirmation/Confirmation'
import "./index.css"
//router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: "we-are-official-couple",
    element: <Confirmation />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
