
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Hero from './components/sections/Hero'
import Navbar from './components/ui/Navbar'
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import MarketingStrip from "./components/sections/MarketingStrip";
import Footer from "./components/sections/Footer";
import PriceList from "./components/sections/PriceList";
import ArtistBio from "./components/sections/ArtistBio";
import Gallery from "./components/sections/Gallery";
import Loader from './components/ui/Loader'; // Import Loader

const theme = createTheme({
  typography: { fontFamily: "Inter, sans-serif" },
  palette: {
    mode: "dark",
    primary: { main: "#FF0080" },
  },
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Barra di navigazione fissa */}
          <Navbar />

          {/* Hero Section: Prima impressione impattante */}
          <Hero />

          {/* Listino Prezzi: Subito chiaro per l'utente interessato */}
          <PriceList />

          {/* Servizi in evidenza: Dettagli su cosa offri */}
          <Services />

          {/* Gallery: Prova visiva della qualità */}
          <Gallery />

          {/* Artist Bio: Personal branding e fiducia */}
          <ArtistBio />

          {/* Experience/Igiene: Rassicurazione sulla sicurezza */}
          <Experience />

          {/* Striscia Marketing: Call to action finale per newsletter/sconto */}
          <MarketingStrip />

          {/* Footer: Contatti e info finali */}
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
