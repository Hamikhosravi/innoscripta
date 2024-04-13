import {useQuery} from "react-Query";
import {newsApiRequest3} from '../utility/axios-utils';
import {DatePicker} from '../interface/DatesPicker';
import formatDate from "../plugins/changeDateFormat";
import noImage from "../assets/noImage.jpg"

type FetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatePicker;
}

export const useGuardianApiData = ({categoryQuery, dateRange}: FetchedDataFilters, onSuccess, onError) => {
    const fetchData = async () => {
        const queryParams = new URLSearchParams();
        queryParams.append('q', categoryQuery);
        queryParams.append('api-key', '1c8b7f77-5f51-4726-aebb-eb02bf39e81f');
        queryParams.append('order-by', 'newest');
        queryParams.append('page-size', 30);
        queryParams.append('show-elements', 'image');

        if (dateRange.startDate && dateRange.endDate) {
            queryParams.append('from-date', dateRange.startDate);
            queryParams.append('to-date', dateRange.endDate);
        }
        const queryString = queryParams.toString();
        const response = await newsApiRequest3({url: `/search?${queryString}`});
        const result = response.data.response.results;
        console.log("res",result)
        const final = result.map((item) => ({
            ...item,
            id: (item.id === "" || item.id === 'https://removed.com') ? Math.random() : item.id,
            title: item.webTitle || '',
            image: item.elements[0]?.assets[0]?.file || noImage,
            date: formatDate(item.webPublicationDate) || '',
            authors: [{name: item.sectionName || ''}]
        }));
        console.log("final33333", final);
        return final;
    };

    return useQuery(['newsData3', categoryQuery, dateRange], fetchData, {onSuccess, onError});
};
