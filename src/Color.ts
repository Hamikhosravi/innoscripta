import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#ba000d',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#ffffff',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default theme
