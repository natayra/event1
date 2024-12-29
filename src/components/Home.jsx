import { Box } from "@mui/material";
import TopBar from "./common/TopBar";
import Hero from "./homeComponents/Hero";
import AboutUs from "./homeComponents/AboutUs";
import EventsComponent from "./homeComponents/EventsComponent";
import Contact from "./homeComponents/Contact";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15vh",
        marginBottom: "15vh",
      }}
    >
      <TopBar />
      <Hero />
      <AboutUs />
      <EventsComponent />
      <Contact />
    </Box>
  );
};

export default Home;
