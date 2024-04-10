import { useMutation } from "react-Query";
import { newsApiRequest } from '../utility/axios-utils';

const fetchData = async (newsApiPost) => {
    return await newsApiRequest({ url: '/', method: 'POST', data: newsApiPost });
};

export const useNewsApiData = () => {
    return useMutation(fetchData);
};
