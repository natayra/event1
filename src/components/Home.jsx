import { Grid2 } from "@mui/material";
import TopBar from "./common/TopBar";
import Hero from "./homeComponents/Hero";
import About from "./homeComponents/About";
import EventsComponent from "./homeComponents/EventsComponent";
import Contact from "./homeComponents/Contact";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <Grid2
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid2 item textAlign="center">
        <TopBar />
      </Grid2>
      <Hero />
      <Grid2 item id="#about" textAlign="center" pt={{ xs: "25%", md: "8%" }}>
        <About />
      </Grid2>
      <Grid2 item id="#events" textAlign="center" pt={{ xs: "25%", md: "8%" }}>
        <EventsComponent />
      </Grid2>
      <Grid2
        container
        item
        id="#contact"
        justifyContent="center"
        pt={{ xs: "25%", md: "8%" }}
      >
        <Contact />
      </Grid2>
      <Grid2 item textAlign="center" pt="8%" pb="2%">
        <Footer />
      </Grid2>
    </Grid2>
  );
};

export default Home;
