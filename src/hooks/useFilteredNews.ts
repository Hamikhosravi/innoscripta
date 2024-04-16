import {Article, NewYorkTimes , GuardianApi} from '../../interface/NewsType';

type APITypes = Article | NewYorkTimes | GuardianApi

export default function useFilteredNews(articles:APITypes[] | undefined, searchQuery:sting, categoryQuery?: string, sourceQuery?: string[] ) {
    if (!articles || !Array.isArray(articles)) {
        return [];
    }
    let filtered = articles.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if (sourceQuery) {
        filtered = articles.filter((item) => sourceQuery.toString().includes(item.apiSource));
    }
    if (categoryQuery && categoryQuery !== "All-Selected") {
        filtered = filtered.filter((cat) => (cat.category === categoryQuery));
    }

    return filtered;
}
