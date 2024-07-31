'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // Purple and green play nicely together.
      main: "#FA4616",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#003B49",
    },
  
    error: {
      // This is green.A700 as hex.
      main: "#DC0000",
    },
    background: {
      default: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;