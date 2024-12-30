import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "rgba(250, 250, 250, 0.7)",
    },
    tertiary: {
      main: "#A2FF00",
    },
    background: {
      default: "#0D0907",
    },
  },
  shape: {
    borderRadius: 13,
  },
  typography: {
    fontFamily: "'Outfit Variable', sans-serif",
    color: "#FFFFFF",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      color: "#FFFFFF",
      fontSize: "5rem",
      textTransform: "none",
    },
    h2: {
      color: "#FFFFFF",
      fontSize: "3.5rem",
      textTransform: "none",
    },
    h3: {
      color: "#FFFFFF",
      fontSize: "2.5rem",
      textTransform: "none",
      fontFamily: "Lexend Variable",
    },
    h4: {
      color: "#FFFFFF",
      fontSize: "1.5rem",
      textTransform: "none",
    },
    h5: {
      fontSize: "1.3rem",
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    h6: {
      fontSize: "0.875rem",
      color: theme.palette.secondary.main,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            fontSize: "1rem",
            color: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 800,
            "&:hover": {
              backgroundColor: "transparent",
              transform: "scale(1.007)",
              color: "rgba(250,250,250, 0.9)",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "black",
            textTransform: "capitalize",
            color: "white",
            border: "none",
            boxShadow: "none",
            paddingTop: 24,
            paddingBottom: 24,
            paddingLeft: 5,
            paddingRight: 5,
            width: "13.5vw",
            minWidth: 160,
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              backgroundColor: theme.palette.grey[300],
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: 10,
            border: `2px solid ${theme.palette.tertiary.main}`,
            padding: "0.25rem 1rem",
            color: theme.palette.common.white,
            textTransform: "none",
            fontFamily: "'Outfit Variable', sans-serif",
            fontSize: "1rem",
            opacity: 0.9,
            fontWeight: 800,
            "&:hover": {
              backgroundColor: theme.palette.tertiary.main,
              color: theme.palette.primary.main,
            },
            [`&.MuiButton-outlined.Mui-disabled`]: {
              color: theme.palette.common.white,
              border: `2px solid ${theme.palette.tertiary.main}`,
              opacity: "0.8",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroud: "pink",
          boxShadow: "none",
          color: "black",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(246, 246, 246, 0.5)",
          maxWidth: "100vw",
        },
      },
    },
    MuiBox: {
      variants: [
        {
          props: { variant: "transparent" },
          style: {
            border: "transparent",
            "&:hover": {
              borderTop: `1px solid ${theme.palette.tertiary.main}`,
              borderBottom: `1px solid ${theme.palette.tertiary.main}`,
              color: theme.palette.tertiary.main,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          border: "2px solid white",
          borderColor: theme.palette.tertiary.main,
          borderRadius: "0.F5rem",
          padding: "0.5% 2%",
          cursor: "pointer",
          "&:hover": {
            scale: "1.005",
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.grey[900],
          },
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 100px #000000 inset`,
              WebkitTextFillColor: "#fff !important",
              borderRadius: "0.5rem",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: "-0.5%",
          color: theme.palette.common.white,
          backgroundColor: theme.palette.common.black,
          "&.Mui-focused": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.common.black,
            padding: "0.5% 1%",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { color: theme.palette.common.white },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[300],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDialog-paper": {
            paddingBottom: 30,
            paddingTop: 10,
            backgroundColor: theme.palette.background.default,
            boxShadow: "none",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          marginTop: 70.5,
        },
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "caption" },
          style: {
            "&.MuiTypography-root": {
              fontSize: "0.875rem",
              color: theme.palette.grey[500],
              textTransform: "none",
              fontWeight: 800,
            },
            "&:hover": {
              backgroundColor: "transparent",
              transform: "scale(1.007)",
              color: theme.palette.tertiary.main,
            },
          },
        },
      ],
    },
  },
});

export { theme };
