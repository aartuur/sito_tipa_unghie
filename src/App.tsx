import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Hero from './components/sections/Hero'

import Navbar from './components/ui/Navbar'
const theme = createTheme({
  typography: { fontFamily: "Inter, sans-serif" },
  palette: {
    mode: "dark",
    primary: { main: "#FF0080" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* Wrapper principale con sfondo atmosferico */}
      <Hero />
    </ThemeProvider>
  );
}

export default App;
