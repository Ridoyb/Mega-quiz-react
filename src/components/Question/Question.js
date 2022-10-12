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
    const notify = () => toast(`${correctAnswer}`,{
        toastId:"customId" 
    });

    const answer=correctAnswer;
    const handleclick= click=>{
    const value=click.target.value;
        
        if(value === answer ){
            toast.success("AWESOME! Your Answer is Correct!!",{
                toastId:'success',
            })
             
        }
        else{
            toast.error("OPPS! Wrong Answer!! Try Again",{
                toastId:"error" 
            })
        }
    
    }

    
    return (
        
        <div>
            
            <div className='quiz'>
                <div className='question-container'>
                <h4>Quiz {index}: {question}</h4>
                <FontAwesomeIcon onClick={notify}  className='icon' icon={faEye}></FontAwesomeIcon>
                
                </div>
                <div className='options'>
                    <div className='Option-div' >
                        <label className='option'><input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[0]} ></input>{options[0]}</label>
                        
                    </div>
                    <div className='Option-div'>
                        <label className='option'><input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[1]} ></input>{options[1]}</label>
                        
                    </div>
                    <div className='Option-div'>
                        <label className='option'><input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[2]} ></input>{options[2]}</label>
                        
                    </div>
                    <div className='Option-div'>
                        <label className='option'><input onClick={ handleclick}  type="radio" name='foo' id="html" value={options[3]} ></input>{options[3]}</label>
                        
                    </div>

                </div>
            </div>
            <ToastContainer/>
        </div>
        
    );
    
};

export default Question;