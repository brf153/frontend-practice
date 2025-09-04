import { Box, Typography } from "@mui/material";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Hero = ({ showMenu, setShowMenu }: { showMenu: boolean; setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoordinates({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: "100dvh",
        width: "100vw",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        position: "relative",
        cursor: isHovered && !showMenu ? "none" : "default",
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
          top: isHovered ? coordinates.y : "50%",
          left: isHovered ? coordinates.x : "50%",
          transform: "translate(-50%, -50%)",
          transition: isHovered ? "none":"top 0.4s cubic-bezier(0.4,0,0.2,1), left 0.4s cubic-bezier(0.4,0,0.2,1)",
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

      <Box sx={{ display: showMenu ? "block" : "none"}}>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Box>

    </Box>
  );
};

export default Hero;
