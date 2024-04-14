import {QueryClientProvider, QueryClient} from "react-Query";
import {Provider} from 'react-redux';
import {store} from './store/store';
import Header from "./Components/header/Navbar/Navbar";
import RoutesPath from "./Routes";
import {ThemeProvider} from '@mui/material/styles';
import theme from './Theme';
import Container from '@mui/material/Container';
import './App.css';
import React from "react";

const queryClient = new QueryClient();

function App() {
    return (
        <Container maxWidth="lg" sx={{padding: 0, minHeight: "100vh", backgroundColor: "steelblue"}}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Header/>
                        <RoutesPath/>
                    </ThemeProvider>
                </Provider>
            </QueryClientProvider>
        </Container>
    )
}

export default App
