import { lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

const NewsItems = lazy(() => import('./Components/news/NewsItems'));
const NewsItem = lazy(() => import('./Components/news/NewsItem/NewsItem'));

export default function RoutesPath() {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<LinearProgress />}><NewsItems /></Suspense>} exact />
            <Route path="/customized-news" element={<Suspense fallback={<LinearProgress />}><NewsItem items="selectedNews" /></Suspense>} exact />
        </Routes>
    );
}
