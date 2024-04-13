import { useQuery } from "react-Query";
import { newsApiRequest } from '../utility/axios-utils';
import {DatePicker} from '../interface/DatesPicker'
import noImage from "../assets/noImage.jpg";

type fetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatePicker
}

export const useNewsApiAIData = ({categoryQuery,dateRange}:fetchedDataFilters, onSuccess, onError) => {
    const fetchData = async () => {
        const newsApiPost = {
            "query": {
                "$query": {
                    "$and": [
                        {
                            "$or": [
                                {
                                    "categoryUri": `dmoz/${categoryQuery}`
                                },
                            ]
                        },
                    ]
                },
            },
            "resultType": "articles",
            "articlesSortBy": "date",
            "apiKey": "846d1bd4-02ac-4b66-9baf-e5ab0f9be0e7"
        };
        if (dateRange.startDate) {
            newsApiPost.query.$query.$and.push({
                "dateStart": `${dateRange.startDate}`,
                "dateEnd": `${dateRange.endDate}`
            })
        } else {
            newsApiPost.query.$filter = {
                "forceMaxDataTimeWindow": "31"
            }
        }

        const response = await newsApiRequest({ url: '/', method: 'POST', data: newsApiPost });
        const result =  response.data.articles.results;
        // This Api fetch 100 items and doesn't have any page-size parameter to specify the number of fetch, thus I use slice method
        const final = result.slice(0, 30).map((item) => ({
            ...item,
            id: (item.uri === "" || item.uri === 'https://removed.com') ? Math.random() : item.uri,
            image: item.image || noImage,
        }));
        return final;
    };

    return useQuery(['newsData', categoryQuery, dateRange], fetchData, {onSuccess, onError});
};
