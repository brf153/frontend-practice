// theme.ts
// Material UI theme setup for your React project


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Material Blue
    },
    secondary: {
      main: '#dc004e', // Material Pink
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'SchibstedGrotesk, Arial, sans-serif'
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff', // Ensure all Typography uses white by default
        },
      },
    },
  },
});

export default theme;