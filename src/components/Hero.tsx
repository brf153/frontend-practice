import { Box } from '@mui/material'

const Hero = () => {
  return (
    <Box sx={{height: "100dvh", width: "100vw", boxSizing: "border-box", padding: 0, margin: 0}}>
        <video
          src="/assets/main.mp4"
          autoPlay
          loop
          muted
          style={{objectFit: "cover", width: "100%", height: "100%"}}
        />
    </Box>
  )
}

export default Hero