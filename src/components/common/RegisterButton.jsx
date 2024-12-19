import { Button } from "@mui/material";

const RegisterButton = ({ fullWidth }) => {
  return (
    <Button variant="outlined" fullWidth={fullWidth}>
      Sign me up!
    </Button>
  );
};

export default RegisterButton;
