import React from 'react';
import Image from './cover-image.png'
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className='header-info'>
                <div>
                    <img className='cover-image' src={Image} alt="" />
                </div>
                <div className='cover-text'>
                    <h4>Mega Quiz is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required</h4>
                    <h1>Test your brain and skills. <br></br>Are you ready for a quiz?? </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;