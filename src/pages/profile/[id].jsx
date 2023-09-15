import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../../styles/userprofile.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import logo from '../../images/pp.jpg';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [saveNews, setSaveNews] = useState([]);
    const [len, setLen] = useState();

    useEffect(() => {
        async function fetchData() {
            const user = {
                'username': localStorage.getItem('name'),
                'email': localStorage.getItem('email'),
                'userid': localStorage.getItem('userid')
            }
            setUser(user);
            console.log(user)
        };
        fetchData();
    }, [id]);

    console.log(saveNews);
    return (
        <div className="user__con">
            <div className="user__container">
                <img className= "user__image"src={logo} alt="" />
                <div className="user__details">
                <h2 className="user__name">Name : {user.username}</h2>
                <h2 className="user__email">Email : {user.email}</h2>
                <h2 className="user__website">User ID : {user.userid}</h2>
            </div>
        </div>
            <div className="saved__container">
                <h2 className="saved__title">Saved News:</h2>
                {
                    len === 0
                    ? <h2 className="no__savednews">No Saved News</h2>
                    : saveNews.map(news => (
                        <div className="saved__news">
                            <img className="saved__img" src={news.images[0].url} alt="news"/>
                            <div>
                                <h2 className="saved__t"><Link className="saved__an" to={`/news/${news._id}`}>{news.title.length > 19 ? news.title.slice(0, 20) + '...' : news.title}</Link></h2>
                                <h2 className="saved__time">{moment(news.createdAt).fromNow()}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default User;