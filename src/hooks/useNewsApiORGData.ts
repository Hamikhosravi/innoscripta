import {useQuery} from "react-Query";
import {newsApiRequest2} from '../utility/axios-utils';
import {DatePicker} from '../interface/DatesPicker';
import formatDate from "../plugins/changeDateFormat";
import noImage from "../assets/noImage.jpg"

type FetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatePicker;
}

export const useNewsApiORGData = ({categoryQuery, dateRange}: FetchedDataFilters, onSuccess, onError) => {
    const fetchData = async () => {
        const queryParams = new URLSearchParams();
        queryParams.append('sortBy', 'publishedAt');
        queryParams.append('pageSize', 30);
        queryParams.append('apiKey', '6c468c562cf549a49ef873831ae464e0');
        queryParams.append('q', categoryQuery);
        if (dateRange.startDate && dateRange.endDate) {
            queryParams.append('from', dateRange.startDate);
            queryParams.append('to', dateRange.endDate);
        }
        const queryString = queryParams.toString();
        const response = await newsApiRequest2({url: `/everything?${queryString}`});
        const result = response.data.articles;
        const final = result.map((item) => ({
            ...item,
            id: (item.url === "" || item.url === 'https://removed.com') ? Math.random() : item.url,
            image: item.urlToImage || noImage,
            date: formatDate(item.publishedAt) || '',
            authors: [{name: item.author || ''}]
        }));
        console.log("final2", final);
        return final;
    };

    return useQuery(['newsData2', categoryQuery, dateRange], fetchData, {onSuccess, onError});
};
