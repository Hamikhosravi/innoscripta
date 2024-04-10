import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/useStore";
import {selectedItems} from "../../store/selectedNews-slice";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Article from '../../Type/NewsType.js';
import "./newsItem.css";

export default function NewsItem({items}: string) {
    const [checkedItems, setCheckedItems] = useState<Article[]>([]);
    const articles = useAppSelector((state) => {
        if (items === "allNews") {
            return state.news.articles;
        } else if (items === "selectedNews") {
            return state.selectedNews.articles;
        }
    });
    const dispatch = useAppDispatch();
    dispatch(selectedItems(checkedItems));
    const handleChange = (article: Article) => {
        const articleIndex = checkedItems.findIndex((item) => item.uri === article.uri);
        if (articleIndex === -1) {
            setCheckedItems([...checkedItems, article]);
        } else {
            const updatedCheckedItems = [...checkedItems];
            updatedCheckedItems.splice(articleIndex, 1);
            setCheckedItems(updatedCheckedItems);
        }

    };

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                {articles.map((article) => (
                    <Grid xs={12} sm={6} md={4} lg={3} key={article.uri} item sx={{ display: 'flex', justifyContent: 'center'}}>
                        <FormControlLabel sx={{margin: "0"}}
                            control={
                                <Checkbox
                                    checked={checkedItems.find((item) => item.uri === article.uri) ? true : false}
                                    onChange={() => handleChange(article)}
                                    sx={{
                                        display: 'none', // Hide the checkbox icon
                                    }}
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
                                        border: checkedItems.find((item) => item.uri === article.uri) ? '2px solid green' : '2px solid grey',
                                        flexDirection: 'column',
                                        transition: '0.2s linear',
                                        overflow: "hidden",
                                        '&:hover': {
                                            borderColor: checkedItems.find((item) => item.uri === article.uri) ? 'green' : 'blue'
                                        },
                                    }}
                                >
                                    <img src={article.image} alt={article.title} loading="lazy" className='newImage'/>
                                    <Box
                                        display="flex"
                                        sx={{flexDirection: 'column', overflow: "auto"}}
                                    >
                                        <Typography variant="title" px={1}>{article.title}</Typography>
                                        <Typography variant="subtitle" px={1}>Date: {article.date}</Typography>
                                        {article.authors[0]?.name &&
                                        <Typography variant="subtitle"
                                                    px={1}>Author: {article.authors[0]?.name}</Typography>}
                                    </Box>
                                </Box>
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
