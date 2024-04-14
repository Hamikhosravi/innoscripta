import React, {useEffect, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {pushNews} from '../../store/news-slice';
import {useNewsApiAIData} from '../../hooks/useNewsApiAIData';
import {useNewsApiORGData} from '../../hooks/useNewsApiORGData';
import {useGuardianApiData} from "../../hooks/useGuardianApiData";
import NewsItem from './NewsItem/NewsItem';
import LinearProgress from '@mui/material/LinearProgress';

const NewsItems = memo(() => {
    const dispatch = useAppDispatch();
    const categoryQuery = useAppSelector(state => state.filtered.subject); // Get categoryQuery from the store
    const dateRange = useAppSelector(state => state.filtered.dates); // Get datesPicker from the store

    const onSuccess1 = () => console.log("FirstApiData is completely fetched.");
    const onError1 = () => console.log("Error on fetching firstApiData.");
    const {isLoading: firstLoading, data: firstApiData} = useNewsApiAIData({
        categoryQuery,
        dateRange
    }, onSuccess1, onError1); // Pass categoryQuery and dateRange to useNewsApiAIData

    const onSuccess2 = () => console.log("SecondApiData is completely fetched.");
    const onError2 = () => console.log("Error on fetching secondApiData.");
    const {isLoading: secondLoading, data: secondApiData} = useNewsApiORGData({
        categoryQuery,
        dateRange
    }, onSuccess2, onError2); // Pass categoryQuery and dateRange to useNewsApiORGData

    const onSuccess3 = () => console.log("ThirdApiData is completely fetched.");
    const onError3 = () => console.log("Error on fetching thirdApiData.");
    const {isLoading: thirdLoading, data: thirdApiData} = useGuardianApiData({
        categoryQuery,
        dateRange
    }, onSuccess3, onError3); // Pass categoryQuery and dateRange to useGuardianApiData


    useEffect(() => {
        if (firstApiData && secondApiData && thirdApiData) {
            const allData = firstApiData.concat(secondApiData, thirdApiData)
            dispatch(pushNews(allData));
        }
    }, [firstApiData, secondApiData, thirdApiData, dispatch]);

    return (
        <>
            {firstLoading && secondLoading && thirdLoading && <LinearProgress />}
            {(firstApiData || secondApiData || thirdApiData) && <NewsItem items="allNews"/>}
        </>
    );
});

export default NewsItems
