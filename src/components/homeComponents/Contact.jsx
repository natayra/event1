import { Grid2 } from "@mui/material";
import ContactForm from "../common/ContactForm";

const Contact = () => {
  return (
    <Grid2 mt="-20vh" id="#contact" sx={{ backgroundColor: "primary.main", padding: "4%" }}>
      <ContactForm />
    </Grid2>
  );
};

export default Contact;
