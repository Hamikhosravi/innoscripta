import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {pushNews} from '../../store/news-slice';
import {useNewsApiAIData} from '../../hooks/useNewsApiAIData';
import {useNewsApiORGData} from '../../hooks/useNewsApiORGData';
import {useGuardianApiData} from "../../hooks/useGuardianApiData";
import NewsItem from './NewsItem/NewsItem';
import LinearProgress from '@mui/material/LinearProgress';

export default function NewsItems() {
    const dispatch = useAppDispatch();
    const categoryQuery = useAppSelector(state => state.filtered.subject); // Get categoryQuery from the store
    const dateRange = useAppSelector(state => state.filtered.dates); // Get datesPicker from the store

    const onSuccess1 = (firstApiData) => console.log("fetched first Data", firstApiData);
    const onError1 = (error) => console.log(error.message);
    const {isLoading: firstLoading, data: firstApiData} = useNewsApiAIData({
        categoryQuery,
        dateRange
    }, onSuccess1, onError1); // Pass categoryQuery and dateRange to useNewsApiAIData

    const onSuccess2 = (secondApiData) => console.log("fetched second Data", secondApiData);
    const onError2 = (error) => console.log(error.message);
    const {isLoading: secondLoading, data: secondApiData} = useNewsApiORGData({
        categoryQuery,
        dateRange
    }, onSuccess2, onError2); // Pass categoryQuery and dateRange to useNewsApiORGData

    const onSuccess3 = (thirdApiData) => console.log("fetched third Data", thirdApiData);
    const onError3 = (error) => console.log(error.message);
    const {isLoading: thirdLoading, data: thirdApiData} = useGuardianApiData({
        categoryQuery,
        dateRange
    }, onSuccess3, onError3); // Pass categoryQuery and dateRange to useGuardianApiData


    useEffect(() => {
        if (firstApiData && secondApiData && thirdApiData) {
            const allData = firstApiData.concat(secondApiData, thirdApiData)
            console.log("all 3 apis", allData)
            dispatch(pushNews(allData));
        }
    }, [firstApiData, secondApiData, thirdApiData, dispatch]);

    return (
        <>
            {firstLoading && secondLoading && thirdLoading && <LinearProgress />}
            {(firstApiData || secondApiData || thirdApiData) && <NewsItem items="allNews"/>}
        </>
    );
}
