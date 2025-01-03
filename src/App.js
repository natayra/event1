import "@fontsource/roboto";
import "@fontsource-variable/roboto-mono";
import "@fontsource-variable/lexend";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/quicksand";
// Supports only weight 400
import "@fontsource-variable/roboto-flex";
// Supports weights 100-900
import "@fontsource-variable/outfit";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import Home from "./components/Home";
import Register from "./components/Register";
import Events from "./components/Events";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register/:id" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
