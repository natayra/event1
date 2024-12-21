import { Button, Typography, Grid2 } from "@mui/material";
import { theme } from "../../utils/theme";

const EventCard = ({ id, name, date, location, address, ageRange }) => {
  console.log(name);

  return (
    <Button
      variant="container"
      href={`/register/${id}`}
      sx={{
        backgroundColor: theme.palette.grey[900],
        border: "1px solid white",
        padding: "2% 5%",
        width: "fit-content",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.palette.grey[800],
          scale: "1.01",
        },
      }}
    >
      <Grid2 container flexDirection="column" width="fit-content">
        <Grid2 item>
          <Typography variant="h4">{name}</Typography>
        </Grid2>
        <Grid2 container item flexDirection="column">
          <Grid2 item>
            <Typography variant="h5">Date: {date}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="h5">Location: {location}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="h5">Address: {address}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="h5">Age Range: {ageRange}</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Button>
  );
};

export default EventCard;
