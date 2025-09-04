import { Box } from '@mui/material'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", boxSizing: "border-box"}}>
      <Navbar setShowMenu={setShowMenu} />
      <Hero showMenu={showMenu} setShowMenu={setShowMenu} />
    </Box>
  )
}

export default App
