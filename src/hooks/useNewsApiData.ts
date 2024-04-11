// useNewsApiData.ts
import { useQuery } from "react-Query";
import { newsApiRequest } from '../utility/axios-utils';

export const useNewsApiData = (categoryQuery: string) => { // Accept categoryQuery as an argument
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
                        {
                            "dateStart": "2024-02-08",
                            "dateEnd": "2024-04-08"
                        }
                    ]
                }
            },
            "resultType": "articles",
            "articlesSortBy": "date",
            "apiKey": "846d1bd4-02ac-4b66-9baf-e5ab0f9be0e7"
        };

        const response = await newsApiRequest({ url: '/', method: 'POST', data: newsApiPost });
        return response.data.articles.results;
    };

    return useQuery(['newsData', categoryQuery], fetchData);
};
