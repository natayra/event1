import { Button, Typography, Grid2, Link } from "@mui/material";
import { theme } from "../../utils/theme";
import Expect from "../Expect";

const EventCard = ({ id, name, date, location, ageRange }) => {
  return (
    <Grid2
      container
      item
      flexDirection="column"
      alignItems={{xs: "flex-start", md: "center"}}
      rowGap="2.5vh"
      sx={{
        backgroundColor: theme.palette.primary.main,
        border: "2px solid white",
        borderColor: theme.palette.secondary.main,
        padding: "3%",
        borderRadius: "0.5rem",
        "-webkit-filter": id === "1" | id === "2" ? "none" : "blur(5px)",
      }}
    >
      <Grid2 item >
        <Typography variant="h4">{name}</Typography>
      </Grid2>
      <Grid2 container item flexDirection="column" alignItems={{xs: "flex-start", md: "center"}}>
        <Grid2 container item flexWrap="nowrap" spacing="0.5rem">
          <Grid2 item>
            <Typography variant="h5">When:</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="h5" color="rgba(255, 255, 255, 0.8)">
              {date}
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2
          container
          item
          flexWrap="nowrap"
          spacing={{ xs: "1rem", md: "0.5rem" }}
        >
          <Grid2 item>
            <Typography variant="h5">Where:</Typography>
          </Grid2>
          <Grid2 item>
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/RAUM+84+-+Eventlocation+-+Bar+-+-+Ping+Pong+-+Karaoke+-+Partylocation/@47.377722,8.5240872,17z/data=!3m1!4b1!4m6!3m5!1s0x47900bbe3703f315:0x1a0c298106545962!8m2!3d47.377722!4d8.5266621!16s%2Fg%2F11rht1c0b5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            >
              <Typography
                variant="h5"
                sx={{
                  textDecoration: "underline",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                {location}
              </Typography>
            </Link>
          </Grid2>
        </Grid2>
        <Grid2 container item flexWrap="nowrap" spacing="0.5rem">
          <Grid2 item>
            <Typography variant="h5">Who:</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="h5" color="rgba(255, 255, 255, 0.8)">
              Singles on their {ageRange}
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Button
        disabled={id !== "2"}
        target="_blank"
        sx={{
          width: "50%",
          fontSize: "1rem",
          marginTop: "1rem",
        
        }}
        variant="outlined"
        href={`https://eventfrog.ch/en/p/dating/singles-party/mix-mingle-play-a-new-kind-of-dating-night-7297612395718904926.html`}
      >
        Buy ticket
      </Button>
      <Grid2 item id="#expect" pt={{ xs: "25%", md: "8%" }}>
      </Grid2>

    </Grid2>
  );
};

export default EventCard;
