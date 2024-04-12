import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { pushNews } from '../../store/news-slice';
import { useNewsApiData } from '../../hooks/useNewsApiData';
import NewsItem from './NewsItem/NewsItem';
import LinearProgress from '@mui/material/LinearProgress';

export default function NewsItems() {
    const dispatch = useAppDispatch();
    const categoryQuery = useAppSelector(state => state.filtered.subject); // Get categoryQuery from the store
    const dateRange = useAppSelector(state => state.filtered.dates); // Get datesPicker from the store

    const { isLoading, data } = useNewsApiData({categoryQuery, dateRange}); // Pass categoryQuery to useNewsApiData

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
