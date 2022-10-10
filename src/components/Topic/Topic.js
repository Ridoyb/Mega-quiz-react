import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    const {name,logo,total} =topic;
    console.log(topic)
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div className='topic-info'>
                <h2>{name}</h2>
                <h3>Quiz: {total}</h3>
            </div>
            <button className='btn-start'>START QUIZ</button>
        </div>
    );
};

export default Topic;