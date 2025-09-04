import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { cardContent } from "../constants/constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  index: number;
  img: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;
};

const Card = (props: Props) => {
  const [isHover, setIsHover] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (detailsRef.current) {
      gsap.to(detailsRef.current, {
        height: isHover ? "13rem" : "5rem",
        bottom: isHover ? "11%" : "15%",
        duration: 0.4,
        ease: "cubic-bezier(0.28,0,0.49,1)",
      });
    }
  }, [isHover]);

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{ display: "flex", gap: 0.5, height: "100%", width: "auto" }}
    >
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
          position: "relative",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            width: 420,
            height: 280,
          }}
        >
          <img
            height={280}
            width={420}
            className="card-image"
            src={props.img}
            alt={props.title}
            style={{
              objectFit: "cover",
              transform: isHover
                ? `translateY(0) scale3d(1.1, 1.1, 1)`
                : "none",
              transition: "transform 0.35s cubic-bezier(0.28,0,0.49,1)",
              position: "absolute",
              top: 0,
              left: 0,
              inset: 0,
            }}
          />
        </Box>
        <Box
          ref={detailsRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            py: 2,
            px: 1,
            position: "absolute",
            left: 0,
            right: 0,
            backgroundColor: "background.paper",
          }}
        >
          {/* Always visible */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flex: 1,
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
                  fontSize: "14px",
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

          {/* Conditional Rendering */}
          <Box
            className="card-description"
            sx={{
              display: isHover ? "flex" : "none",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "14px",
                fontFamily: "SchibstedGroteskBold",
              }}
            >
              {props.description}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "14px",
                fontFamily: "SchibstedGroteskBold",
                textDecoration: "underline",
                cursor: "pointer",
                textUnderlineOffset: "2px",
              }}
            >
              Visit the Site
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Menu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: showMenu ? 1 : 0,
        duration: 0.25,
        ease: "cubic-bezier(0.28,0,0.49,1)",
      });
    }
    if (subMenuRef.current) {
      const tl = gsap.timeline();
      tl.to(subMenuRef.current, {
        clipPath: showMenu ? "inset(0 0 0 0%)" : "inset(0 0 0 100%)",
        duration: 1,
        ease: "expo.inOut",
      }).to(
        subMenuRef.current,
        {
          x: showMenu ? 0 : 100,
          duration: 1.2,
          ease: "power3.inOut",
        },
        "<"
      );
    }
  }, [showMenu]);

  return (
    <Box
      ref={menuRef}
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        opacity: 0,
        backgroundColor: "background.paper",
      }}
    >
      <Box
        ref={subMenuRef}
        sx={{
          py: 5,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          clipPath: "inset(0 0 0 100%)",
          transform: "translateX(10%)",
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
            onClick={() => setShowMenu(false)}
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
              gap: 0.5,
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
