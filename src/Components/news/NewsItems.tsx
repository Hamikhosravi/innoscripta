import React, { useState, useEffect, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { pushNews } from '../../store/news-slice';
import { useNewsApiAIData } from '../../hooks/useNewsApiAIData';
import { useNewsApiORGData } from '../../hooks/useNewsApiORGData';
import { useGuardianApiData } from "../../hooks/useGuardianApiData";
import NewsItem from './NewsItem/NewsItem';
import LinearProgress from '@mui/material/LinearProgress';

const NewsItems = memo(() => {
    const dispatch = useAppDispatch();
    const categoryQuery = useAppSelector(state => state.filtered.subject); // Get categoryQuery from the store
    const dateRange = useAppSelector(state => state.filtered.dates); // Get datesPicker from the store
    const sourceQuery = useAppSelector(state => state.filtered.source); // Get sourceQuery from the store

    const [loading, setLoading] = useState(true); // Define loading as a state variable

    // Fetch data for first API
    const onSuccess1 = () => console.log("FirstApiData is fetched.");
    const onError1 = () => console.log("Error on fetching firstApiData.");
    const { data: firstApiData, isLoading: firstLoading } = useNewsApiAIData({ categoryQuery, dateRange, sourceQuery }, onSuccess1, onError1);

    // Fetch data for second API
    const onSuccess2 = () => console.log("SecondApiData is fetched.");
    const onError2 = () => console.log("Error on fetching secondApiData.");
    const { data: secondApiData, isLoading: secondLoading } = useNewsApiORGData({ categoryQuery, dateRange, sourceQuery }, onSuccess2, onError2);

    // Fetch data for third API
    const onSuccess3 = () => console.log("ThirdApiData is fetched.");
    const onError3 = () => console.log("Error on fetching thirdApiData.");
    const { data: thirdApiData, isLoading: thirdLoading } = useGuardianApiData({ categoryQuery, dateRange, sourceQuery }, onSuccess3, onError3);

    useEffect(() => {
        // Set loading to true whenever any of the loading states change
        setLoading(firstLoading || secondLoading || thirdLoading);
    }, [firstLoading, secondLoading, thirdLoading]);

    useEffect(() => {
        // Dispatch news data when all data has been fetched
        if (!loading) {
            const allData = [...(firstApiData || []), ...(secondApiData || []), ...(thirdApiData || [])];
            console.log("all", allData);
            dispatch(pushNews(allData));
        }
    }, [firstApiData, secondApiData, thirdApiData, loading, dispatch]);

    return (
        <>
            {loading && <LinearProgress />}
            {(firstApiData?.length || secondApiData?.length || thirdApiData?.length) && <NewsItem items="allNews" />}
        </>
    );
});

export default NewsItems;
