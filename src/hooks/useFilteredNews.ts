import Article from '../../Type/NewsType';

export default function useFilteredNews(articles:Article[] | undefined, searchQuery:sting, categoryQuery?: string ) {
    if (!articles || !Array.isArray(articles)) {
        return [];
    }

    let filtered = articles.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if (categoryQuery && categoryQuery !== "All-Selected") {
        filtered = filtered.filter((cat) => cat.category === categoryQuery)
    }
    return filtered;
}
