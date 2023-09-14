import React from 'react'
import '../styles/homecard.css'
import { Link } from 'react-router-dom';
const HomeCard = ({n}) => {
    return (
            <div className="card">
                <div className="image">
                    <img src={n.images[0]} alt="news"/>
                </div>
                <div className="title">
                    <h1>{n.title}</h1>
                </div>
                <div className="des">
                    <button className="homecard__btn"><Link className="btn1" target="_blank" to={`/news/${n._id}`}>Read More...</Link></button>
                </div>
            </div>
    )
}

export default HomeCard
