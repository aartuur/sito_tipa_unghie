import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF2DAE', // Neon Pink
    },
    secondary: {
      main: '#B020FF', // Neon Purple
    },
    background: {
      default: '#1E1E1F',
      paper: '#252526',
    },
    text: {
      primary: '#FAF8F7',
      secondary: '#DCC7F5',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.1em' },
    h2: { fontFamily: 'Orbitron, sans-serif' },
    h3: { fontFamily: 'Playfair Display, serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});