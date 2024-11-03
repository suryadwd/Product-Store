import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react' // Import ChakraProvider and ColorModeScript
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider> 
        <ColorModeScript initialColorMode="light" /> {/* Set initial color mode */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)

//main.jsx