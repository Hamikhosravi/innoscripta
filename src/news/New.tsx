import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Article from '../Type/NewsType.ts';
import "./new.css";
import Typography from '@mui/material/Typography';


export default function New({articles}:Article[]) {
    return (

        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                {articles.map((article) => (

                    <Grid xs={12} sm={6}  md={4} lg={3} key={article.uri}>
                        <Box
                            height={300}
                            width={250}
                            my={2}
                            mx="auto"
                            display="flex"
                            sx={{ border: '1px solid grey', flexDirection: 'column', overflow: "hidden" }}
                        >
                            <img src={article.image} alt={article.title} loading="lazy" className='newImage'/>
                            <Box
                                display="flex"
                                sx={{ flexDirection: 'column', overflow: "auto" }}
                            >
                                <Typography variant="title" px={1}>{article.title}</Typography>
                                <Typography variant="subtitle" px={1}>Date: {article.date}</Typography>
                                {article.authors[0]?.name &&<Typography variant="subtitle" px={1}>Author: {article.authors[0]?.name}</Typography>}
                            </Box>
                            {/*<div className='newBody'>*/}
                            {/*    */}
                            {/*</div>*/}

                        </Box>
                    </Grid>
                ))}

            </Grid>
        </Box>

    )
}
