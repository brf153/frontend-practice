import { Box, Typography } from "@mui/material";
import Menu from "./Menu";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100vw",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        position: "relative",
      }}
    >
      <video
        src="/assets/main.mp4"
        autoPlay
        loop
        muted
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          sx={{
            fontSize: "2.3vmin",
            fontFamily: "SchibstedGroteskSemiBold",
            color: "black",
            textAlign: "center",
            backgroundColor: "white",
            width: { xs: "120px" },
            height: { xs: "120px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            lineHeight: 1.1,
          }}
        >
          Watch <br /> Reel
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5vmin",
            fontFamily: "SchibstedGroteskBold",
            color: "white",
            textAlign: "center",
          }}
        >
          BASIC/DEPT
        </Typography>
      </Box>

      <Menu />
    </Box>
  );
};

export default Hero;
