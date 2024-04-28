import { useQuery } from "react-Query";
import { newsApiRequest4 } from '../utility/axios-utils';
import { DatesPicker } from '../interface/DatesPicker';
import formatDate from "../plugins/changeDateFormat";
import noImage from "../assets/noImage.jpg";
import { useCallback } from 'react';

type FetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatesPicker;
    sourceQuery:string[];
}

export const useNewsApiORGData = ({ categoryQuery, dateRange, sourceQuery }: FetchedDataFilters, onSuccess, onError) => {

    const fetchData = useCallback(async () => {
        if (sourceQuery.findIndex((val) => val === "Newsapi.org") === -1) {
            return []; // Return an empty array if Newsapi.org source is not selected
        }
        const queryParams = new URLSearchParams();
        queryParams.append('sortBy', 'publishedAt');
        queryParams.append('pageSize', 20);
        queryParams.append('apiKey', 'bff6ffb39e664e549de245858c9b136e');
        // queryParams.append('apiKey', '1feb2b7b8f3b4b989861ec727443fa63');
        queryParams.append('q', categoryQuery);
        if (dateRange.startDate && dateRange.endDate) {
            queryParams.append('from', dateRange.startDate);
            queryParams.append('to', dateRange.endDate);
        }
        const queryString = queryParams.toString();
        const response = await newsApiRequest4({ url: `/everything?${queryString}` });
        const result = response.data.articles;
        const final = result.map((item) => ({
            ...item,
            id: (item.url === "" || item.url === 'https://removed.com') ? Math.random() : item.url,
            apiSource: "Newsapi.org",
            image: item.urlToImage || noImage,
            date: formatDate(item.publishedAt) || '',
            authors: [{ name: item.author || '' }]
        }));
        return final;
    }, [categoryQuery, dateRange, sourceQuery]);

    return useQuery(['newsData4', categoryQuery, dateRange, sourceQuery], fetchData, { onSuccess, onError });
};
