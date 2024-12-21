import { Grid2, Grow, Typography } from "@mui/material";
import Banner from "../../assets/image.jpg";
import { useState, useEffect } from "react";
import LogoWhiteLettersNoBackground from "../assets/LogoWhiteLettersNoBackground";

const Hero = () => {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <Grow
      in={transition}
      mountOnEnter
      unmountOnExit
      timeout={600}
      style={{
        transform: `translateY(0px)`,
      }}
    >
      <Grid2
        container
        height="95vh"
        justifyContent="center"
        alignItems="center"
      >
        <Grid2
          container
          item
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{
            background: `transparent url(${Banner}) no-repeat bottom`,
            backgroundSize: "cover",
            transition: "width 2s ease-in",
            filter: "blur(8px)",
            "-webkit-filter": "blur(3px)",
          }}
        />
        <Grid2
          container
          item
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{
            position: "absolute",
            top: { xs: "22vh", md: "37%" },
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "1rem",
            padding: { xs: "1rem 2rem 2rem 2rem", md: "1% 2% 2% 2%" },
          }}
        >
          <Grid2 item>
            <LogoWhiteLettersNoBackground sx={{ fontSize: "16rem" }} />
          </Grid2>
          <Grid2 item>
            <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2.5rem" }}>
              Dating can be fun
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grow>
  );
};

export default Hero;
