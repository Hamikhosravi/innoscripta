import './App.css';
import {QueryClientProvider, QueryClient} from 'react-Query';
import News from './news/News.tsx';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {ThemeProvider} from '@mui/material/styles';
import theme from './Color';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <News/>
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
        </QueryClientProvider>
    )
}

export default App
