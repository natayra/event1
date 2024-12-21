import { Box, Grid2 } from "@mui/material";
import EventCard from "./common/EventCard";
import TopBar from "./common/TopBar";

const EventsInfo = [
  {
    id: "1",
    name: "Dating Event - Zurich",
    date: "February 7, 2025 ",
    location: "Raum 84",
    address: " Langstrasse 84, 8004 Zürich",
    ageRange: "23 - 39 years old",
  },
];

const Events = () => {
  return (
    <Box>
      <TopBar />
      <Grid2
        container
        mt={{ xs: "5rem", md: "7rem" }}
        flexDirection="column"
        spacing={4}
        px="5%"
      >
        {EventsInfo.map((event) => (
          <Grid2 item>
            <EventCard
              id={event.id}
              name={event.name}
              date={event.date}
              location={event.location}
              address={event.address}
              ageRange={event.ageRange}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default Events;
