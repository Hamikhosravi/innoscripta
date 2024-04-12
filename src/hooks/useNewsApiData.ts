import { useQuery } from "react-Query";
import { newsApiRequest } from '../utility/axios-utils';
import {DatePicker} from '../Type/DatesPicker'

type fetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatePicker
}

export const useNewsApiData = ({categoryQuery,dateRange}:fetchedDataFilters) => {
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
        return response.data.articles.results;
    };

    return useQuery(['newsData', categoryQuery, dateRange], fetchData);
};
