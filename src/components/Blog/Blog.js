import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            
            <div className='blog'>
                <h2>What is the purpose of react router?</h2>
                <p>ReactJS is a broadly used JavaScript-based open-source library created by Facebook that helps make top-notch web apps without extensive coding. Its main objective is to offer fast and best rendering performance. The main feature of ReactJS is the individual unit components. It helps developers break complex User Interfaces (UIs) into simple components.<br></br><br></br>

                Many leading companies like Netflix, Apple, and PayPal use ReactJS to build web apps. Wondering why? This post will help you know why ReactJS is gaining popularity amongst developers. However, before getting into that, let’s first uncover the significant benefits of using ReactJS.</p>
            </div>
            <div className='blog'>
                <h2>How does context api work?</h2>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='blog'>
                <h2>Useref hook details</h2>
                <p>useRef is a mutable hook which returns  a space where we can mutate and it will not affect the React lifecycle which means when we can change some data in there, it does not provoke any reactiveness.</p>

                <p>useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.<br></br> <br></br>

                The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component. </p>
            </div>
        </div>
    );
};

export default Blog;