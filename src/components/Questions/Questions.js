import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Questions.css'

const Questions = () => {
    const questions=useLoaderData();
    const topicName=useLoaderData();
    const {data}=topicName;
    console.log(data.name)




    

    
    return (
        <div className='quiz-container' >
            <h1 >Quiz On <span className='topicName'>{data.name}</span></h1>
            {
                    questions.data.questions.map(quiz => <Question
                    key={quiz.id}
                    quiz={quiz}
                    ></Question> )
            }
            
        </div>
    );
};

export default Questions;