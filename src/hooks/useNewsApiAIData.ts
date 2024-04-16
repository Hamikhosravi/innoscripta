import { useQuery } from "react-Query";
import { newsApiRequest } from '../utility/axios-utils';
import { DatesPicker } from '../interface/DatesPicker';
import noImage from "../assets/noImage.jpg";
import { useCallback } from 'react';

type FetchedDataFilters = {
    categoryQuery: string;
    dateRange: DatesPicker;
    sourceQuery:string[];
}

export const useNewsApiAIData = ({ categoryQuery, dateRange, sourceQuery }: FetchedDataFilters, onSuccess, onError) => {

    const fetchData = useCallback(async () => {
        if (sourceQuery.findIndex((val) => val === "Newsapi.ai") === -1) {
            return []; // Return an empty array if Newsapi.ai source is not selected
        }
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
            // "apiKey": "846d1bd4-02ac-4b66-9baf-e5ab0f9be0e7"
            "apiKey": "25aab9be-f57a-4e4e-a94d-07ffdecca08c"
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
        const result = response.data.articles.results;
        // This Api fetch 100 items and doesn't have any page-size parameter to specify the number of fetch, thus I use slice method
        const final = result.slice(0, 10).map((item) => ({
            ...item,
            id: (item.uri === "" || item.uri === 'https://removed.com') ? Math.random() : item.uri,
            apiSource: "Newsapi.ai",
            image: item.image || noImage,
        }));
        return final;
    }, [categoryQuery, dateRange, sourceQuery]);

    return useQuery(['newsData', categoryQuery, dateRange, sourceQuery], fetchData, { onSuccess, onError });
};
