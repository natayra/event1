import { AppBar, Toolbar, Grid2, Button, Dialog, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoBlack from "./assets/LogoBlack";
import { theme } from "../utils/theme";
import { Link as RouterLink } from "react-router-dom";
import useDialog from "./hooks/useDialog";

const sections = [{ name: "Home" }, { name: "About us" }, { name: "Contact" }];
export default function TopBar() {
  const [clicked, setClicked] = useState("Home");
  const { open, handleClickOpen, handleClose } = useDialog();

  const handleClick = (sectionName) => {
    setClicked(sectionName);
    document
      .getElementById(window.location.hash)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        border: "none",
      }}
    >
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
          py="0.5%"
        >
          <Grid2 container item height="fit-content" alignItems="center">
            <LogoBlack
              sx={{
                height: "4rem",
                width: "4rem",
                padding: 0,
              }}
            />
          </Grid2>
          <Grid2
            container
            item
            xs={5}
            display={{ xs: "none", md: "flex" }}
            justifyContent="flex-end"
          >
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
                  to={section.to}
                  onClick={() => setClicked(section.name)}
                  sx={{
                    color:
                      clicked === section.name
                        ? "rgba(250,250,250, 0.8)"
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
          <Button variant="text" onClick={handleClickOpen}>
            <MenuIcon sx={{ color: "secondary.main" }} />
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                border: "none",
              },
            }}
          >
            <Grid2
              container
              width="100%"
              justifyContent="space-between"
              alignItems="space-between"
              px="4.5%"
            >
              <Grid2 item textAlign="center">
                <LogoBlack
                  sx={{
                    height: "4rem",
                    width: "4rem",
                    padding: 0,
                  }}
                />
              </Grid2>
              <Grid2 item>
                <Button variant="text" onClick={handleClose}>
                  <CloseIcon sx={{ color: "secondary.main", height: 60 }} />
                </Button>
              </Grid2>
            </Grid2>

            <Grid2
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
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
                    fontSize={32}
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
          </Dialog>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
