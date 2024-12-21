import { Typography, FormLabel } from "@mui/material";

export default function Label({ label }) {
  return (
    <FormLabel>
      <Typography variant="h5" color="primary.main">
        {label}
      </Typography>
    </FormLabel>
  );
}
