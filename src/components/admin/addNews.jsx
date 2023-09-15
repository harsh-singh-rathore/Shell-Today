import React, { useState } from 'react';
import closeIcon from '../../images/delete.png';
import { postArticleAPI, postDataAPI } from '../../utils/fetchData';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0')

    const formatedDate = `${year}-${month}-${day}`
    return formatedDate;
}

const AddNews = ({setAddNews}) => {
    const state = {
        title: '',
        link: '',
        location: '',
        thumbnail: '',
        date:'',
        user: '',
        err: ''
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const [news, setNews] = useState(state);
    const { title, link, location, thumbnail } = news;

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setNews({...news, [name]: value, err: '', success: ''});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            try{
                console.log(formatDate(selectedDate))
            }catch(err) {
                console.log('error hereererere')
                console.log(err.message)
            }
            await postArticleAPI({ title, link, location, thumbnail, date:formatDate(selectedDate)});
        } catch (err) {
            err.response.data.msg && setNews({...news, err: err.response.data.msg});
        }
        setAddNews(false);
    }

    return (
        <div className="addNews__main">
            <button className="addNews__close btn" onClick={() => setAddNews(false)}>
                <img className="icon" src={closeIcon} alt="close button" />
            </button>
            <form className="addNews__form">
                <h2 className="addNews__title">Add News</h2>
                <label className="addNews__label" htmlFor="title">Title:</label>
                <input
                    className="addNews__input"
                    type="text" 
                    id="title"
                    name="title"
                    placeholder="Enter title..."
                    onChange={handleChangeInput}
                    value={title}
                />
                <label className="addNews__label" htmlFor="">Link:</label>
                <input
                    className="addNews__input"
                    type="text" 
                    id="link"
                    name="link"
                    placeholder="Enter link..."
                    onChange={handleChangeInput}
                    value={link}
                />
                <label className="addNews__label" htmlFor="">Location:</label>
                <input
                    className="addNews__input"
                    type="text" 
                    id="location"
                    name="location"
                    placeholder="Enter location..."
                    onChange={handleChangeInput}
                    value={location}
                />
                <label className="addNews__label" htmlFor="">Date:</label>
                <ReactDatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    placeholder={selectedDate}
                ></ReactDatePicker>
                <label className="addNews__label" htmlFor="">Image:</label>
                <input
                    className="addNews__input"
                    type="text" 
                    id="thumbnail"
                    name="thumbnail"
                    placeholder="Enter image link..."
                    onChange={handleChangeInput}
                    value={thumbnail}
                />
                <button onClick={handleSubmit} className="btn btn--primary addNews__btn">
                    Add
                </button>
            </form>
        </div>
    )
};

export default AddNews;