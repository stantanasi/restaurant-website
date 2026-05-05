'use client';

import { fraunces, plus_jakarta_sans } from '@/app/fonts';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#C8311A', dark: '#a8270f', contrastText: '#fff' },
    secondary: { main: '#2D5E24', contrastText: '#fff' },
    background: { default: '#FBF6EC', paper: '#FFFFFF' },
    text: { primary: '#0F1A0E', secondary: '#8C6840' },
  },
  typography: {
    fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
    h1: { fontFamily: `${fraunces.style.fontFamily}, serif`, fontWeight: 900, lineHeight: 1.0 },
    h2: { fontFamily: `${fraunces.style.fontFamily}, serif`, fontWeight: 700, lineHeight: 1.1 },
    h3: { fontFamily: `${fraunces.style.fontFamily}, serif`, fontWeight: 700 },
    h4: { fontFamily: `${fraunces.style.fontFamily}, serif`, fontWeight: 700 },
    h5: { fontFamily: `${fraunces.style.fontFamily}, serif`, fontWeight: 400 },
    h6: { fontFamily: `${fraunces.style.fontFamily}, serif`, fontWeight: 400 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 700, borderRadius: 100 },
        contained: {
          background: '#F2B418',
          color: '#0F1A0E',
          transition: 'background 0.2s, transform 0.2s',
          '&:hover': {
            background: '#d4a010',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          background: '#D4E8C2',
          borderColor: '#D4E8C2',
          color: '#2D5E24',
          '&:hover': {
            background: '#c2dfa8',
            borderColor: '#c2dfa8',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: '#E8DDD0' },
        root: {
          background: '#FBF6EC',
          borderRadius: '10px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2D5E24',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2D5E24',
          },
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

export default theme;