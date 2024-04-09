import {useEffect} from 'react';
import {useNewsApiData} from '../../hooks/useNewsApiData';
import {useAppDispatch} from '../../hooks/useStore';
import {pushNews} from '../../store/news-slice'
import Button from '@mui/material/Button';
import NewsItem from './NewsItem.js'

export default function NewsItems() {
    const dispatch = useAppDispatch();
    const {mutate, isLoading, data} = useNewsApiData();

    useEffect(() => {
        const newsApiFetchData = async () => {
            try {
                await mutate({
                    "query": {
                        "$query": {
                            "$and": [
                                {
                                    "$or": [
                                        {
                                            "categoryUri": "dmoz/Arts"
                                        },
                                        {
                                            "categoryUri": "dmoz/Business"
                                        }
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
                }, {
                    onSuccess: (data) => {
                        console.log('Data:', data.data.articles);
                        dispatch(pushNews(data.data.articles.results))
                    },
                });
            } catch (error) {
                console.error('Error posting data:', error);
            }

        };
        newsApiFetchData(); // Call the function to trigger mutation on mount
    }, [mutate]);

    return (
        <>
            {/*<Button onClick={postData}>click</Button>*/}
            {isLoading && <div>Loading...</div>}
            {data && <NewsItem items="allNews" />}
        </>
    );

}
