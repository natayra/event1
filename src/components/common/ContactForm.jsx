import {
  Alert,
  Button,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { useState } from "react";

const ContactForm = () => {
  const { form, success, sendEmail } = useForm();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Grid2 container flexDirection="column" spacing={8} width={{xs: "80vw", md: "60vw"}}>
        <Grid2 item>
          <Typography variant="h4">Send us a message!</Typography>
        </Grid2>
        <Grid2 container item xs={12} flexDirection="column" spacing={4}>
          {/* First Name */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </Grid2>
          {/* Last Name */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </Grid2>
          {/* Email */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid2>
          {/* Message */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              multiline
              minRows={5}
              maxRows={8}
              label="Message"
              name="message"
              type="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid2>
          <Grid2 item xs={7}>
            <Button
              variant="outlined"
              type="submit"
              value="Send"
              disabled={success === "sending"}
              sx={{ padding: {xs: "1% 3%", md: "1% 1.5%"} }}
            >
              <Typography variant="h6" color="inherit">
                {success === "sending" ? "Sending..." : "Send Message"}
              </Typography>
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
      {success === "not_sent_yet" || success === "sending" ? null : (
        <Alert severity={success === "sent_successfully" ? "success" : "error"}>
          {success === "sent_successfully"
            ? "Your message was sent sucessfully!"
            : "Something went wrong. Please try again."}
        </Alert>
      )}
    </form>
  );
};

export default ContactForm;
