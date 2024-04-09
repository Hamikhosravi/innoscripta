import {useEffect} from 'react';
import {useNewsApiData} from '../hooks/useNewsApiData.ts';
import Button from '@mui/material/Button';

export default function News() {
    const {mutate, isLoading, data} = useNewsApiData();

    useEffect(() => {
        const newsApiFetchData = async () => {
            try {
                await mutate({
                    "query": {
                        "$query": {
                            "dateStart": "2024-02-08",
                            "dateEnd": "2024-04-08"
                        }
                    },
                    "resultType": "articles",
                    "articlesSortBy": "date",
                    "apiKey": "846d1bd4-02ac-4b66-9baf-e5ab0f9be0e7"
                }, {
                    onSuccess: (data) => {
                        console.log('Data:', data);
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
        </>
    );

}
