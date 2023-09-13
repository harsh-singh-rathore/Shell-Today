import React from 'react';
import { useState, useEffect } from 'react';
import { getDataAPI } from './../utils/fetchData';
import HomeCard from './HomeCard';
const Home = () => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            // const res = await getDataAPI('allNews');
            const res = {
                'data': {
                    'news': [{'images': ['https://en.wikipedia.org/wiki/Shell_plc#/media/File:Shell_logo.svg'],'title': "what a news", 'des': " THIS is descript"}, {'images': ['https://en.wikipedia.org/wiki/Shell_plc#/media/File:Shell_logo.svg'],'title': "this is news", 'des': "this is descpritpon"}]
                }
            }
            setNews(res.data.news);
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