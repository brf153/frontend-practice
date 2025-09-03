import { Box } from '@mui/material'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", boxSizing: "border-box"}}>
      <Navbar />
      <Hero />
    </Box>
  )
}

export default App
