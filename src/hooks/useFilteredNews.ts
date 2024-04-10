import Article from '../../Type/NewsType';

export default function useFilteredNews(articles: Article[] | undefined, searchQuery: string) {
    if (!articles || !Array.isArray(articles)) {
        return [];
    }

    const filtered = articles.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return filtered;
}
