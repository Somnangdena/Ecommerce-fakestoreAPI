import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/Routes'

const App = () => {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App