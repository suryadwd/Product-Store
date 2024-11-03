import {Box, Button} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
function App() {
  return (
    <Box minH={"100vh"}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Routes>
    </Box>
  )
}

export default App

//app.jsx