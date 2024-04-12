import { format } from 'date-fns';

const formatDate = (date) => {
    return format(date, 'yyyy-MM-dd'); // Format date as 'YYYY-MM-DD'
};
export default formatDate
