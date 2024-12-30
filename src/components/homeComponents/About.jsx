import { Grid2, Typography } from "@mui/material";

const About = () => {
  return (
    <Grid2 container flexDirection="column" alignItems="center" rowGap="5vh">
      <Grid2 item>
        <Typography variant="h3">About</Typography>
      </Grid2>
      <Grid2
        container
        flexDirection="column"
        alignItems="center"
        rowGap="2vh"
        item
        width="80%"
      >
        <Grid2 item>
          <Typography variant="h5" textAlign="center">
            Welcome to Voii, the ultimate{" "}
            <strong style={{ color: "rgba(250, 250, 250, 0.75" }}>
              in-person dating event
            </strong>{" "}
            experience in Switzerland!
          </Typography>
        </Grid2>
        <Grid2 item>
          <Typography variant="h5" textAlign="center">
            If you’re tired of the same old scene — bars, small talk about
            hobbies, and the endless "Where are you from?" loop — then Voii is
            exactly what you’ve been waiting for.
          </Typography>
        </Grid2>
        <Grid2 item>
          <Typography variant="h5" textAlign="center">
            Born from the simple idea that{" "}
            <strong style={{ color: "rgba(250, 250, 250, 0.75" }}>
              meeting people should be fun
            </strong>
            , fresh, and stress-free, Voii is all about creating a space where
            singles can connect in ways that feel authentic and exciting.
            Whether you're a social butterfly or someone who prefers a little
            nudge to get started, we’ve got something for you. At Voii, we
            believe dating should be an adventure. That’s why{" "}
            <strong style={{ color: "rgba(250, 250, 250, 0.75" }}>
              our events are filled with games, activities, and unique dynamics
              that serve every personality.
            </strong>
          </Typography>
        </Grid2>
        <Grid2 item>
          <Typography variant="h5" textAlign="center">
            From the outgoing to the introverted, the experienced to the
            first-timers, we’ve designed an event that lets{" "}
            <strong style={{ color: "rgba(250, 250, 250, 0.75" }}>
              you choose{" "}
            </strong>{" "}
            how to navigate it. And hey, even if sparks don’t fly, you’ll still
            leave with great memories and maybe even some new friends. We’re all
            in this together—the ups, the nerves, the laughs. So come join us at
            Voii, where{" "}
            <strong style={{ color: "rgba(250, 250, 250, 0.75" }}>
              dating meets fun
            </strong>
            , and where finding a connection doesn’t feel like a chore.
          </Typography>
        </Grid2>
        <Grid2 item>
          <Typography variant="h5" textAlign="center">
            <strong style={{ color: "rgba(250, 250, 250, 0.75" }}>
              Let’s make dating exciting again.
            </strong>{" "}
            See you there!
          </Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default About;
