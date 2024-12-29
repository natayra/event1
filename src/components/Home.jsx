import { Box } from "@mui/material";
import TopBar from "./common/TopBar";
import Hero from "./homeComponents/Hero";
import About from "./homeComponents/About";
import EventsComponent from "./homeComponents/EventsComponent";
import Contact from "./homeComponents/Contact";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15vh",
        marginBottom: "5vh",
      }}
    >
      <TopBar />
      <Hero />
      <About />
      <EventsComponent />
      <Contact />
      <Footer/>
    </Box>
  );
};

export default Home;
