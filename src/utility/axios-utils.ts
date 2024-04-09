import axios from 'axios';
// const newsApiClient = axios.create({baseURL:`${process.env['NEWSAPI_URL']}`});
const newsApiClient = axios.create({baseURL:'https://newsapi.ai/api/v1/article/getArticles'});

export const newsApiRequest = ({...options})=>{
    // newsApiClient.default.headers.common.Authorization = "Bearer Token";
    const onSuccess = (response)=>response;
    const onError = (error)=>{
        // throw new Error('Network response was not ok');
        return error;
    };
    return newsApiClient(options).then(onSuccess).catch(onError)
};
