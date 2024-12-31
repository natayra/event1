import { Box, Grid2 } from "@mui/material";
import EventCard from "./common/EventCard";
import TopBar from "./common/TopBar";

const EventsInfo = [
  {
    id: "1",
    name: "Friday Night @ Raum84",
    date: "Friday, February 7, 2025 | 7:00 PM",
    location: "Raum 84 - Langstrasse 84, 8004 Zurich",
    ageRange: "23 to 39 years old",
  },
  {
    id: "2",
    name: "Something @ place",
    date: "Friday, Month D, Year | 7:00 PM",
    location: "Someplace - Some Street Number 20",
    ageRange: "23 to 39 years old",
  },
  {
    id: "3",
    name: "Something @ place",
    date: "Friday, Month D, Year | 7:00 PM",
    location: "Someplace - Some Street Number 440",
    ageRange: "23 to 39 years old",
  },
  {
    id: "4",
    name: "Something @ place",
    date: "Friday, Month D, Year | 7:00 PM",
    location: "Someplace - Some Street Number 2",
    ageRange: "23 to 39 years old",
  },
];

const Events = () => {
  return (
    <Box>
      <TopBar />
      <Grid2
        container
        justifyContent="center"
        mt="7rem"
        px="4%"
        spacing={8}
      >
        {EventsInfo.map((event) => (
          <EventCard
            id={event.id}
            name={event.name}
            date={event.date}
            location={event.location}
            ageRange={event.ageRange}
          />
        ))}
      </Grid2>
    </Box>
  );
};
export default Events;
