// NewsItems.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { pushNews } from '../../store/news-slice';
import { useNewsApiData } from '../../hooks/useNewsApiData';
import NewsItem from './NewsItem.js';
import LinearProgress from '@mui/material/LinearProgress';

export default function NewsItems() {
    const dispatch = useAppDispatch();
    const categoryQuery = useAppSelector(state => state.filtered.subject); // Get categoryQuery from the store
    const { isLoading, data } = useNewsApiData(categoryQuery); // Pass categoryQuery to useNewsApiData

    useEffect(() => {
        if (data) {
            console.log(data)
            // Push fetched data to the store when data is available
            dispatch(pushNews(data));
        }
    }, [data, dispatch]);

    return (
        <>
            {isLoading && <LinearProgress />}
            {data && <NewsItem items="allNews" />}
        </>
    );
}
