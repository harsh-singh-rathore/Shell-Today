import React from 'react';
import { useState, useEffect } from 'react';
import { getDataAPI } from './../utils/fetchData';
import HomeCard from './HomeCard';

const Home = () => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const res = await getDataAPI('NewsArticle');
            setNews(res.data);
            console.log(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className="main">
            {
                news.map(n => (
                    <HomeCard n={n}/>
                ))
            }
        </div>
    )
};

export default Home;