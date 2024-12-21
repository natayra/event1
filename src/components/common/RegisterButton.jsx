import { Button } from "@mui/material";

const RegisterButton = ({ fullWidth }) => {
  return (
    <Button variant="outlined" fullWidth={fullWidth} href="/register">
      Sign me up!
    </Button>
  );
};

export default RegisterButton;
