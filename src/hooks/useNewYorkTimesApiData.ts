import { useQuery } from "react-query";
import { newsApiRequest2 } from '../utility/axios-utils';
import { DatesPicker } from '../interface/DatesPicker';
import formatDate from "../plugins/changeDateFormat";
import noImage from "../assets/noImage.jpg";
import { useCallback } from 'react';

type FetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatesPicker;
    sourceQuery:string[];
}

export const useNewYorkTimesData = ({ categoryQuery, dateRange, sourceQuery }: FetchedDataFilters, onSuccess, onError) => {

    const fetchData = useCallback(async () => {
        if (sourceQuery.findIndex((val) => val === "New York Times") === -1) {
            return []; // Return an empty array if nytimes.com source is not selected
        }
        const queryParams = new URLSearchParams();
        queryParams.append('sort', 'newest');
        queryParams.append('facet_fields', 'section_name');
        queryParams.append('q', categoryQuery);
        if (dateRange.startDate && dateRange.endDate) {
            queryParams.append('begin_date', dateRange.startDate.replace(/-/g,""));
            queryParams.append('end_date', dateRange.endDate.replace(/-/g,""));
        }
        queryParams.append('api-key', 'GvdfGTwo0A3mhOKtJBRqPrDFkUciEgwn');

        const queryString = queryParams.toString();
        const response = await newsApiRequest2({ url: `/articlesearch.json?${queryString}` });
        const result = response.data.response.docs;
        const final = result.map((item) => ({
            ...item,
            id: (item.uri === "" || item.uri === 'https://removed.com') ? Math.random() : item.uri,
            apiSource: "NewYorkTimes",
            title: item.headline?.main || '',
            image: noImage,
            date: formatDate(item.pub_date) || '',
            authors: [{ name: item.byline?.original || '' }]
        }));
        return final;
    }, [categoryQuery, dateRange, sourceQuery]);

    return useQuery(['newsData2', categoryQuery, dateRange, sourceQuery], fetchData, { onSuccess, onError });
};
