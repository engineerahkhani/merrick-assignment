import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: '#ffffff',
    },
    error: {
      main: '#e36049',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});

interface ThemeProps {
  children: any;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
