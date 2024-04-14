import React, {useState, useEffect, memo, useMemo, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/useStore";
import {selectedItems} from "../../../store/news-slice";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Article, NewsApiOrg , GuardianApi} from '../../../interface/NewsType';
import "./newsItem.css";
import useFilteredNews from "../../../hooks/useFilteredNews";
import {useLocation} from "react-router-dom";

interface Props {
    items: 'allNews' | 'selectedNews'; // Specify the type of items
}

type APITypes = Article | NewsApiOrg | GuardianApi

const NewsItem = memo(({items}: Props) => {
    const location = useLocation();
    const selectedNews = useAppSelector(state => state.news.selectedArticles);
    const [checkedItems, setCheckedItems] = useState<APITypes[]>(selectedNews || []);

    const allNews = useAppSelector(state => state.news.articles);
    const searchQuery = useAppSelector(state => state.filtered.letters);
    const categoryQuery = useAppSelector(state => state.filtered.subject);
    const sourceQuery = useAppSelector(state => state.filtered.source);

    const dispatch = useAppDispatch();

    // Memoize articles based on items, searchQuery, and categoryQuery
    const articles = useMemo(() => {
        if (items === "allNews") {
            return useFilteredNews(allNews, searchQuery);
        } else if (items === "selectedNews") {
            return useFilteredNews(selectedNews, searchQuery, categoryQuery, sourceQuery);
        }
        return [];
    }, [items, searchQuery, categoryQuery, sourceQuery, allNews, selectedNews]);

    // Dispatch selected items
    useEffect(() => {
        dispatch(selectedItems(checkedItems));
    }, [checkedItems, dispatch]);

    // Handle checkbox change
    const handleChange = useCallback((article: APITypes) => {
        const articleIndex = checkedItems.findIndex((item) => item.id === article.id);
        if (articleIndex === -1) {
            setCheckedItems([...checkedItems, {...article, category: categoryQuery}]);
        } else {
            const updatedCheckedItems = [...checkedItems];
            updatedCheckedItems.splice(articleIndex, 1);
            setCheckedItems(updatedCheckedItems);
        }
    }, [categoryQuery, checkedItems]);

    return (
        <Box sx={{flexGrow: 1, marginTop: "64px", backgroundColor:"steelblue"}}>
            <Grid container spacing={2} sx={{m:0}}>
                {!articles.length ?  ( location.pathname === "/" ? (<Typography variant="h4" sx={{mx:"auto", mt:6, color:"white"}}>No data is still fetched.</Typography>) : (<Typography variant="h4" sx={{mx:"auto", mt:6, color:"white"}}>No item is selected.</Typography>)
                    ) : (
                articles.map((article) => (
                    <Grid xs={12} sm={6} md={4} lg={3} key={article.id} item
                          sx={{display: 'flex', justifyContent: 'center', px: 2}}>
                        <FormControlLabel
                            sx={{m:0}}
                            control={
                                <Checkbox
                                    checked={!!checkedItems.find((item) => item.id === article.id)}
                                    onChange={() => handleChange(article)}
                                    sx={{display: 'none'}} // Hide the checkbox icon
                                />
                            }
                            label={
                                <Box
                                    height={300}
                                    width={250}
                                    my={2}
                                    mx="auto"
                                    display="flex"
                                    sx={{
                                        background: checkedItems.find((item) => item.id === article.id) ? 'lightGreen' : 'white',
                                        border: '2px solid grey',
                                        flexDirection: 'column',
                                        transition: '0.2s linear',
                                        overflow: "hidden",
                                        '&:hover': {
                                            border: '2px solid blue'
                                        },
                                    }}
                                >
                                    <img src={article.image} alt={article.title} loading="lazy" className='newImage'/>
                                    <Box display="flex" sx={{flexDirection: 'column', overflow: "auto"}}>
                                        <Typography variant="title" px={1}>{article.title}</Typography>
                                        <Typography variant="subtitle" px={1}>Date: {article.date}</Typography>
                                        {article.authors[0]?.name &&
                                        <Typography variant="subtitle"
                                                    px={1}>Author: {article.authors[0]?.name}</Typography>
                                        }
                                    </Box>
                                </Box>
                            }
                        />
                    </Grid>
                )))}
            </Grid>
        </Box>
    );
});

export default NewsItem;
