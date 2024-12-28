import { Box } from "@mui/material";
import TopBar from "./common/TopBar";
import Hero from "./homeComponents/Hero";
import AboutUs from "./homeComponents/AboutUs";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15vh",
        marginBottom: "15vh",
      }}
    >
      <TopBar />
      <Hero />
      <AboutUs />
    </Box>
  );
};

export default Home;
