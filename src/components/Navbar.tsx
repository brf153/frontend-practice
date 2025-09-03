import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { navbarContent } from "../constants/constants";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <Box
        sx={{
          display: "flex",
          py: 5,
          px: 7,
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: "3.6vmin",
            fontFamily: "SchibstedGroteskBold",
            cursor: "pointer",
          }}
        >
          BASIC/DEPT
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 10,
            fontSize: "2.5vmin",
            fontWeight: 700,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {navbarContent.map((item) => (
            <Typography key={item} sx={{ cursor: "pointer" }}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            cursor: "pointer",
            position: "absolute",
            right: "4%",
            "&:hover > :first-of-type": {
              transform: "translateX(-2px)",
            },
            "&:hover > :last-of-type": {
              transform: "translateX(2px)",
            },
          }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <CircleIcon
              key={index}
              sx={{
                fontSize: 6,
                color: "white",
                transition: "transform 0.2s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
