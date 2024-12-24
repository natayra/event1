import { Button } from "@mui/material";
import { theme } from "../../utils/theme";

const RegisterButton = ({ fullWidth }) => {
  return (
    <Button
      variant="outlined"
      fullWidth={fullWidth}
      href="/events"
      sx={{ borderColor: theme.palette.tertiary.main }}
    >
      Sign me up!
    </Button>
  );
};

export default RegisterButton;
