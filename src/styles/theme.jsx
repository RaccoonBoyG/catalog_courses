import { createMuiTheme } from '@material-ui/core/styles';


export const CustomTheme = createMuiTheme({
  palette: {
    common: { black: '#000', white: 'rgba(255, 255, 255, 1)' },
    background: { paper: 'rgba(255, 255, 255, 1)', default: 'rgba(255, 255, 255, 1)' },
    primary: {
      light: 'rgba(173, 235, 255, 1)',
      main: 'rgba(72, 167, 234, 1)',
      dark: 'rgba(82, 178, 255, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    secondary: {
      light: 'rgba(0, 110, 189, 1)',
      main: 'rgba(17, 103, 175, 1)',
      dark: 'rgba(19, 133, 215, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: 'rgba(255, 255, 255, 1)' },
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.54)', disabled: 'rgba(0, 0, 0, 0.38)', hint: 'rgba(7, 7, 7, 0.38)' }
  }
});
