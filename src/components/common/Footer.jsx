import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography variant="h6">
      Copyrights © {new Date().getFullYear()} Voii. All rights reserved.
    </Typography>
  );
};
export default Footer;
