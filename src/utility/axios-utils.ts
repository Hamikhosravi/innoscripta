import axios from 'axios';

// API for the Newsapi.ai website

// const newsApiClient = axios.create({baseURL:process.env.REACT_APP_NEWSAPI_URL});
const newsApiClient = axios.create({
    baseURL: 'https://newsapi.ai/api/v1/article/getArticles',
    headers: {
        'Authorization': 'Bearer Token',
        'Content-Type': 'application/json'
    }
});

export const newsApiRequest = ({...options}) => {
    // newsApiClient.default.headers.common.Authorization = "Bearer Token";
    const onSuccess = (response) => response;
    const onError = (error) => {
        // throw new Error('Network response was not ok');
        return error;
    };
    return newsApiClient(options).then(onSuccess).catch(onError)
};

// -------------------------------------------------------------------------------------------------------------

// Second API for the Newsapi.org website

const newsApiClient2 = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'Authorization': 'Bearer Token',
        'Content-Type': 'application/json'
    },
    withCredentials: true  // Include this option
});

export const newsApiRequest2 = ({...options}) => {
    const onSuccess = (response) => response;
    const onError = (error) => {
        return error;
    };
    return newsApiClient2(options).then(onSuccess).catch(onError)
};


// -------------------------------------------------------------------------------------------------------------

// Third API for the Guardian website

const newsApiClient3 = axios.create({
    baseURL: 'https://content.guardianapis.com',
    headers: {
        'Authorization': 'Bearer Token',
        'Content-Type': 'application/json'
    }
});

export const newsApiRequest3 = ({...options}) => {
    const onSuccess = (response) => response;
    const onError = (error) => {
        return error;
    };
    return newsApiClient3(options).then(onSuccess).catch(onError)
};
