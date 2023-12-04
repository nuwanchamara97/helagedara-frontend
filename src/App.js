import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  // {
  //   path: "/Aboutus",
  //   element: <Aboutus/>
  // },
  
]);

export default function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
