import React from 'react';
import './Error.css'
import image from './emoji.png'

const Error = () => {
    return (
        <div className='error'>
            <img src={image} alt="" />
            <h1 className='error-title'>404</h1>
            <h3 className='error-title'>Page Not Found!!</h3>
        </div>
    );
};

export default Error;