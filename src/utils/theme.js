import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "rgba(250, 250, 250, 0.5)",
    },
    tertiary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#000000",
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
    },
    h4: {
      color: "#FFFFFF",
      fontSize: "1.5rem",
      textTransform: "none",
    },
    h5: {
      fontSize: "1.1rem",
      color: theme.palette.secondary.main,
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
            fontSize: "1.25rem",
            color: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 800,
            "&:hover": {
              backgroundColor: "transparent",
              transform: "scale(1.007)",
              color: "rgba(250,250,250, 0.8)",
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
            borderRadius: 100,
            border: `1px solid ${theme.palette.primary.main}`,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 25,
            paddingRight: 25,
            color: "primary.main",
            "&:hover": {
              backgroundColor: theme.palette.tertiary.main,
              color: theme.palette.common.white,
              border: `1px solid ${theme.palette.tertiary.main}`,
            },
            [theme.breakpoints.down("sm")]: {
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: "2.5vw",
              paddingRight: "2.5vw",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: theme.shape.borderRadius,
          padding: 40,
          height: "100%",
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: `1px solid ${theme.palette.grey[400]}`,
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
          backgroundColor: theme.palette.secondary.light,
          borderRadius: theme.shape.borderRadius,
          paddingTop: 8,
          paddingBottom: 8,
          paddingRight: 10,
          paddingLeft: 10,
          width: "100%",
          border: `1px solid ${theme.palette.grey[300]}`,
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.grey[300],
          },
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
