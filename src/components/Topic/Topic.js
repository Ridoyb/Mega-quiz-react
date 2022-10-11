import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {name,logo,total,id} =topic;
    // console.log(topic)
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div className='topic-info'>
                <h2>{name}</h2>
                <h3>Quiz: {total}</h3>
            </div>
            <button className='btn-start' ><Link className='btn-start' to={`/quiz/${id}`}>START QUIZ</Link></button>
        </div>
    );
};

export default Topic;