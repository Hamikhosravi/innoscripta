import {QueryClientProvider, QueryClient} from 'react-Query';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Header from "./Components/header/Navbar";
import NewsItems from './Components/news/NewsItems.tsx';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {ThemeProvider} from '@mui/material/styles';
import theme from './Theme';
import Container from '@mui/material/Container';
import './App.css';

const queryClient = new QueryClient();

function App() {
    return (
        <Container maxWidth="lg">
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Header />
                        <NewsItems/>
                        <Button
                            component="label"
                            color="primary"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon/>}
                        >
                            Upload file
                        </Button>
                    </ThemeProvider>
                </Provider>
            </QueryClientProvider>
        </Container>
    )
}

export default App
