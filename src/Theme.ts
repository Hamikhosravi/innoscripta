import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        title: {
            fontSize: 12,
            fontStyle: 'italic',
            fontWeight: 'bold'
        },
        subtitle: {
            fontSize: 11,
            color:'grey'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: '#02aaba',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#1f9cff',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default theme
