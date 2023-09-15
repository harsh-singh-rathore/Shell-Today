import React, { useState } from 'react';
import '../styles/aboutus.css';

const Aboutus = () => {
    const state = {
        email: '',
        msg: '',
        success: ''
    };

    const [contect, setContect] = useState(state);
    const { email, msg, success } = contect;

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setContect({...contect, [name]: value, err: '', success: ''});
    };

    return (
        <div className="about_container">
            <div className="about__block">
                <h2 className="about__title">About Us:</h2>
                <p className="about__par">
                  The Shell Today Web Application with Integrated Map Feature is an innovative and game-changing platform that aims to provide users with 
                  comprehensive and current information about the ever-evolving clean and sustainable energy sector. This software solution not only allows 
                  users to stay updated with the latest news articles on green energy but also offers a unique spatial perspective through its integrated 
                  map interface. By combining the power of dynamic article exploration with geographical insights, this platform empowers users to make 
                  informed decisions and actively contribute to the global shift towards clean and sustainable energy sources.
                </p>
                <div className='ourself-outer'>
                  <div className="ourself">
                      <span className="me">
                          <i className="fa fa-envelope"></i>
                          <p className="about__email">suyash.tyagi@shell.com</p>
                      </span>
                      <span className="me">
                          <i className="fa fa-envelope"></i>
                          <p className="about__email">vridhi.kamath@shell.com</p>
                      </span>
                      <span className="me">
                          <i className="fa fa-envelope"></i>
                          <p className="about__email">nayonika.arora@shell.com</p>
                      </span>
                  </div>
                  <div className="ourself">
                      <span className="me">
                          <i className="fa fa-envelope"></i>
                          <p className="about__email">harsh.rathod@shell.com</p>
                      </span>
                      <span className="me">
                          <i className="fa fa-envelope"></i>
                          <p className="about__email">jaishnav.g@shell.com</p>
                      </span>
                      <span className="me">
                          <i className="fa fa-envelope"></i>
                          <p className="about__email">ritika.singh@shell.com</p>
                      </span>
                  </div>
                </div>
            </div>
        </div>
    )
};

export default Aboutus;