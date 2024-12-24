import { Typography, FormLabel } from "@mui/material";

export default function Label({ label }) {
  return (
    <FormLabel>
      <Typography variant="h5" color="common.white">
        {label}
      </Typography>
    </FormLabel>
  );
}
