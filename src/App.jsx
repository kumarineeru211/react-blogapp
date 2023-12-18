

import './App.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./lib/routes"

function App() {
  
  return (
    <>
    <ChakraBaseProvider>
    <RouterProvider router={router}/>
    </ChakraBaseProvider>

    </>
  )
}

export default App
