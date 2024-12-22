import {
  Box,
  Typography,
  Button,
  Grid2,
  InputBase,
  Alert,
} from "@mui/material";
import TopBar from "./common/TopBar";
import { useForm } from "./hooks/useForm";
import Label from "./common/Label";
import { theme } from "../utils/theme";
import { useLocation } from "react-router-dom";

const Register = () => {
  const { form, success, sendEmail } = useForm();
  
  return (
    <Box>
      <TopBar />
      <form ref={form} onSubmit={sendEmail}>
        <Grid2
          container
          mt={{ xs: "5rem", md: "7rem" }}
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
          flexDirection="column"
          spacing={4}
        >
          <Grid2
            container
            item
            xs={12}
            justifyContent="space-between"
            alignItems="center"
            mb={-4}
          >
            <Grid2 item>
              <Typography variant="h4" color="primary.main"></Typography>
            </Grid2>
            , <Grid2 item textAlign="right">February 7, 2025 in Zurich </Grid2>
          </Grid2>
          <Grid2 container item xs={12} flexDirection="column" spacing={4}>
            <Grid2 container item xs={12} spacing={4}>
              <Grid2
                container
                item
                flexDirection="column"
                xs={5.95}
                spacing={1}
              >
                <Grid2 item>
                  <Label label="Name" />
                </Grid2>
                <Grid2 item>
                  <InputBase type="text" name="user_name" required />
                </Grid2>
              </Grid2>
              <Grid2 container item flexDirection="column" xs={6} spacing={1}>
                <Grid2 item>
                  <Label label="Email" />
                </Grid2>
                <Grid2 item>
                  <InputBase type="email" name="user_email" required />
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2 container item flexDirection="column" xs={12} spacing={1}>
              <Grid2 item>
                <Label label="Message" />
              </Grid2>
              <Grid2 item>
                <InputBase
                  name="message"
                  required
                  multiline
                  minRows={5}
                  maxRows={8}
                />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2
            container
            item
            justifyContent="space-between"
            xs={12}
            spacing={3}
            mb={4}
          >
            <Grid2 item xs={5}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.main",
                    border: `1px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                <Typography variant="h6" color="inherit">
                  Cancel
                </Typography>
              </Button>
            </Grid2>
            <Grid2 item xs={7}>
              <Button
                variant="outlined"
                type="submit"
                value="Send"
                disabled={success === "sending"}
                fullWidth
                sx={{ backgroundColor: "common.white" }}
              >
                <Typography variant="h6" color="inherit">
                  {success === "sending" ? "Sending..." : "Send Message"}
                </Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        {success === "not_sent_yet" || success === "sending" ? null : (
          <Alert
            severity={success === "sent_successfully" ? "success" : "error"}
          >
            {success === "sent_successfully"
              ? "Your message was sent sucessfully!"
              : "Something went wrong. Please try again."}
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default Register;
