import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { cardContent } from "../constants/constants";

type Props = {
  index: number;
  img: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;
};

const Card = (props: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 1, height: "100%", width: "auto" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Box sx={{ height: "100%", width: "1px", bgcolor: "text.secondary" }} />
        <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
          0{props.index + 1}
        </Typography>
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Box>
          <img height={300} width={420} src={props.img} alt={props.title} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flex: 1,
            px: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "24px",
                fontFamily: "SchibstedGroteskBold",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "12px",
                fontFamily: "SchibstedGroteskSemiBold",
              }}
            >
              {props.subtitle}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "24px",
                fontFamily: "SchibstedGroteskSemiBold",
              }}
            >
              @{props.year}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Menu = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          py: 5,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Upper section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "10%",
            px: 7,
          }}
        >
          <Box sx={{ display: "flex", gap: 7 }}>
            <CircleIcon sx={{ color: "text.secondary", fontSize: "12px" }} />
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.2,
                fontSize: "14px",
              }}
            >
              (5) INTERNAL WORKS <br /> @25 c/o BASIC/DEPT
            </Typography>

            <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
              A COLLECTION OF INTERNAL PROJECT AND INITIATIVES UNDER THE
              BASIC/DEPT BRAND
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </Box>
        </Box>

        {/* Middle Section */}
        <Box
          sx={{
            height: "70%",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              height: "100%",
              width: "100%",
              transform: "translateX(56px)",
            }}
          >
            {cardContent.map((item, index) => (
              <Card index={index} {...item} />
            ))}
          </Box>
        </Box>

        {/* Last Section */}
        <Box>
          <Typography sx={{ color: "text.secondary", fontSize: "14px", px: 7 }}>
            BASIC/DEPT INC
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
