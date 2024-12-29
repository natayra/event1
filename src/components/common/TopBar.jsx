import { AppBar, Toolbar, Grid2, Button, Dialog, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import LogoBlack from "../svgComponents/LogoBlack";
import { theme } from "../../utils/theme";
import { Link as RouterLink } from "react-router-dom";
import useDialog from "../hooks/useDialog";
import RegisterButton from "./RegisterButton";
import { Link } from "react-router-dom";

const sections = [
  { name: "About us", to: "#aboutus" },
  { name: "Events", to: "#events", href: "/events" },
  { name: "Contact", to: "#contact" },
];
export default function TopBar() {
  const [clicked, setClicked] = useState("Home");
  const { open, handleClickOpen, handleClose } = useDialog();

  const handleClick = (sectionName) => {
    setClicked(sectionName);
    document
      .getElementById(window.location.hash)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  console.log("here", window.location.hash);

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          backdropFilter: "blur(3px)",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid2
          width="100%"
          height="100%"
          container
          justifyContent="space-between"
          alignItems="center"
          px="1%"
        >
          <Grid2 container item height="fit-content" alignItems="center">
            <Button variant="text" disableRipple href="/">
              <LogoBlack
                sx={{
                  height: "4rem",
                  width: "4rem",
                  padding: 0,
                }}
              />
            </Button>
          </Grid2>
          <Grid2
            container
            item
            xs={5}
            display={{ xs: "none", md: "flex" }}
            justifyContent="flex-end"
          >
            <Grid2 item sx={{ paddingRight: "1rem" }}>
              <RegisterButton />
            </Grid2>
            {sections.map((section) => (
              <Grid2
                item
                key={section.name}
                sm={2.4}
                onClick={() => handleClick(section.name)}
              >
                <Button
                  variant="text"
                  fullWidth
                  disableRipple
                  component={Link}
                  href={section.href}
                  to={section.to}
                  sx={{
                    color:
                      clicked === section.name
                        ? "rgba(250,250,250, 0.9)"
                        : "rgba(150,150,150, 1)",
                  }}
                >
                  {section.name}
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          {open ? (
            <Button variant="text" onClick={handleClose}>
              <CloseIcon sx={{ color: "secondary.main", height: 60 }} />
            </Button>
          ) : (
            <Button variant="text" onClick={handleClickOpen}>
              <MenuIcon sx={{ color: "secondary.main" }} />
            </Button>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                border: "none",
                width: "100%",
              },
            }}
          >
            <Grid2
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
              mb="10%"
            >
              {sections.map((item) => (
                <Grid2
                  item
                  my={1}
                  key={item.name}
                  onClick={() => handleClose()}
                >
                  <Button
                    variant="text"
                    underline="hover"
                    to={item.to}
                    component={RouterLink}
                    onClick={() => setClicked(item.name)}
                    sx={{
                      color:
                        clicked === item.name
                          ? "rgba(250,250,250, 0.8)"
                          : "rgba(150,150,150, 1)",
                    }}
                  >
                    {item.name}
                  </Button>
                </Grid2>
              ))}
            </Grid2>
            <RegisterButton fullWidth />
          </Dialog>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
