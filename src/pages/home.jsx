import React from 'react';
import { useState, useEffect } from 'react';
import { getDataAPI } from './../utils/fetchData';
import HomeCard from './HomeCard';
import registerImage from '../images/register.jpg';

const Home = () => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            // const res = await getDataAPI('allNews');
            const res = {
                'data': {
                    'news': [
                        {'images': [registerImage],'title': "what a news", 'des': " THIS is descript"}, 
                        {'images': [registerImage],'title': "this is news", 'des': "this is descpritpon"},
                        {'images': [registerImage],'title': "this is news", 'des': "this is descpritpon"},
                        {'images': [registerImage],'title': "this is news", 'des': "this is descpritpon"}
                    ]
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