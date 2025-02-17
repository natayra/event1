import { Grid2, Typography } from "@mui/material";

const Expect = () => {
  return (
    <Grid2 container flexDirection="column" alignItems="center" rowGap="5vh">
      <Grid2
        container
        flexDirection="column"
        alignItems="center"
        rowGap="2vh"
        item
        width="80%"
      >
        <Grid2 item textAlign="left">
          <Typography variant="h4" mb="5%">
            🎉 Event Schedule – Let's Get Flirty! 💘
          </Typography>
          <Typography variant="h5" mb="2%" fontWeight="800">
            🕖 19:00 - 19:30 | Doors Open & Check-In
          </Typography>
          <Typography variant="h5" mb="1%">
            Walk in, grab a name tag (because remembering names is hard), and
            get your game cards. You’ll receive:{" "}
          </Typography>
          <Typography variant="h5">
            ✅ A bingo card to break the ice{" "}
          </Typography>
          <Typography variant="h5">
            ✅ A one-on-one invitation card (use it wisely 😉){" "}
          </Typography>
          <Typography variant="h5">
            ✅ A drink (okay, that’s on you, but highly encouraged 🍹){" "}
          </Typography>
          <Typography variant="h5" mt="1%">
            Start mingling, challenge someone to a game, and get the flirtation
            flowing!
          </Typography>
          <Typography variant="h5" my="2%" fontWeight="800">
            🎲 19:30 - 20:30 | Icebreaker Games & Casual Chaos{" "}
          </Typography>
          <Typography variant="h5">
            This is where the magic happens:{" "}
          </Typography>
          <Typography variant="h5">
            🏓 Beer pong, ping pong, and table football – because nothing says
            "romance" like competitive spirit.{" "}
          </Typography>
          <Typography variant="h5">
            🔎 "Find Someone Who" Bingo – get people to spill their secrets and
            tick those boxes.{" "}
          </Typography>
          <Typography variant="h5">
            💌 One-on-one conversations – if you feel the vibe, don’t wait! Grab
            a table, invite someone, and see where it goes.{" "}
          </Typography>
          <Typography variant="h5" my="2%" fontWeight="800">
            🎶 20:30 - 22:00 | Open Mingling & Music{" "}
          </Typography>
          <Typography variant="h5">
            No more structured games – just good vibes, great convos, and a
            killer playlist in the background.{" "}
          </Typography>
          <Typography variant="h5">
            Sip, chat, and shoot your shot before the night ends! 💃🕺{" "}
          </Typography>
          <Typography variant="h5" my="2%" fontWeight="800">🍸 22:00 - ? | Open Ending </Typography>
          <Typography variant="h5">
            The event technically ends, but you don’t have to! Stick around at
            the bar, grab another drink, or make spontaneous plans with your new
            connections. Who knows where the night will take you? 😉
          </Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Expect;
