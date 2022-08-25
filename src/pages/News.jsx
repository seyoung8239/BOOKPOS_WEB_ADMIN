import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NewsItem from "../Components/NewsItem";
import { baseDir } from "../Constant";

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function News() {
    const [newsData, setNewsData] = useState([]);
    const [newsOpenList, setNewsOpenList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${baseDir}/news`);
            const n = res.data.length;
            setNewsData(res.data);
            setNewsOpenList(new Array(n).fill(false));
        };
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    height: "90%",
                }}
            >
                <Typography variant="h4" mt={4} mb={4}>
                    뉴스 관리
                </Typography>
                <Button style={{ width: "80px" }} variant="contained">
                    <Link
                        to="/create_news"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        글쓰기
                    </Link>
                </Button>
                {newsData.map((el, i) => (
                    <NewsItem
                        newsOpenList={newsOpenList}
                        setNewsOpenList={setNewsOpenList}
                        key={i}
                        news={el}
                    />
                ))}
            </Paper>
        </Container>
    );
}

export default News;
