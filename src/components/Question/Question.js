import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'
import { useLoaderData } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';



const Question = ({quiz}) => {
    const {id,question,options,correctAnswer,questions}= quiz;
    const index= [].indexOf(question);
    const notify = () => toast(`${correctAnswer}`);

    const answer=correctAnswer;
    const handleclick= click=>{
    const value=click.target.value;
        
        if(value === answer ){
            toast.success("AWESOME! Your Answer is Correct!!")  
        }
        if(value !== answer){
            toast.error("OPPS! Wrong Answer!! Try Again")
        }
    
    }

    
    return (
        <div>
            
            <div className='quiz'>
                <div className='question-container'>
                <h4>Quiz {index}: {question}</h4>
                <FontAwesomeIcon onClick={notify}  className='icon' icon={faEye}></FontAwesomeIcon>
                <ToastContainer/>
                </div>
                <div className='options'>
                    <div className='Option-div'>
                        <input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[0]} ></input><label className='option'>{options[0]}</label>
                        <ToastContainer/>
                    </div>
                    <div className='Option-div'>
                        <input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[1]} ></input><label className='option'>{options[1]}</label>
                        <ToastContainer/>
                    </div>
                    <div className='Option-div'>
                        <input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[2]} ></input><label className='option'>{options[2]}</label>
                        <ToastContainer/>
                    </div>
                    <div className='Option-div'>
                        <input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[3]} ></input><label className='option'>{options[3]}</label>
                        <ToastContainer/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Question;