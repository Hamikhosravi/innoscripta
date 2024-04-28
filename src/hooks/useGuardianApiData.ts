import {useQuery} from "react-Query";
import {newsApiRequest3} from '../utility/axios-utils';
import {DatesPicker} from '../interface/DatesPicker';
import formatDate from "../plugins/changeDateFormat";
import noImage from "../assets/noImage.jpg";
import {useCallback} from 'react';

type FetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatesPicker;
    sourceQuery: string[];
}

export const useGuardianApiData = ({categoryQuery, dateRange, sourceQuery}: FetchedDataFilters, onSuccess, onError) => {
    const fetchData = useCallback(async () => {
        if ((sourceQuery.findIndex((val) => val === "Guardian")) === -1) {
            return []; // Return an empty array if Guardian source is not selected
        }
        const queryParams = new URLSearchParams();
        queryParams.append('q', categoryQuery);
        queryParams.append('api-key', '1c8b7f77-5f51-4726-aebb-eb02bf39e81f');
        queryParams.append('order-by', 'newest');
        queryParams.append('page-size', 20);
        queryParams.append('show-elements', 'image');

        if (dateRange.startDate && dateRange.endDate) {
            queryParams.append('from-date', dateRange.startDate);
            queryParams.append('to-date', dateRange.endDate);
        }
        const queryString = queryParams.toString();
        const response = await newsApiRequest3({url: `/search?${queryString}`});
        const result = response.data.response.results;
        const final = result.map((item) => ({
            ...item,
            id: (item.id === "" || item.id === 'https://removed.com') ? Math.random() : item.id,
            apiSource: "Guardian",
            title: item.webTitle || '',
            image: item.elements && item.elements[0]?.assets && item.elements[0]?.assets[0]?.file ? item.elements[0].assets[0].file : noImage,
            date: formatDate(item.webPublicationDate) || '',
            authors: [{name: item.sectionName || ''}]
        }));
        return final;
    }, [categoryQuery, dateRange, sourceQuery]);

    return useQuery(['newsData3', categoryQuery, dateRange, sourceQuery], fetchData, {onSuccess, onError});
};

