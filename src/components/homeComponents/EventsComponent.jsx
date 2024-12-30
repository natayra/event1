import { Grid2, Box, Typography, Button } from "@mui/material";
import EventsBanner from "../../assets/img103.jpeg";
import { theme } from "../../utils/theme";

const EventsComponent = () => {
  return (
    <Box
      id="#events"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: `transparent url(${EventsBanner}) no-repeat center`,
          backgroundSize: "cover",
          "-webkit-filter": "blur(8px)",
          height: {xs: "100vh", sm: "60vh"},
          width: "85vw",
        }}
      />
      <Grid2
        container
        flexDirection="column"
        alignItems="center"
        rowGap="4vh"
        sx={{
          position: "relative",
          top: {xs: "-60vh", sm: "-40vh"},
          background: "rgba(0, 0, 0, 0.9)",
          padding: { xs: "1rem 2rem 2rem 2rem", md: "3%" },
          borderRadius: "1rem",
        }}
      >
        <Grid2 item>
          <Typography variant="h4" textAlign="center" fontFamily="Outfit Variable">
            Meet, vibe, and connect. Check out what’s up next!
          </Typography>
        </Grid2>
        <Grid2 item>
          <Button
            variant="outlined"
            href="/events"
            sx={{
              borderColor: theme.palette.tertiary.main,
              fontSize: "1.125rem",
              padding: "0.25rem 3rem",
            }}
          >
            Events
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default EventsComponent;
