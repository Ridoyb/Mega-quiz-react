import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line,LineChart } from 'recharts';
import './Statistics.css'



const Statistics = () => {

    const data= useLoaderData()
    console.log(data.data)
    const [{name,total}]= data.data;
    console.log(name,total)
    
    
 
       
    return (
        <div>
            <h1 className='stat'>Statistics</h1>
        <div className='chart'>
        <ResponsiveContainer width={400} height={400}>
        <LineChart 
          width={500}
          height={300}
          data={data.data}
          margin={{
            top: 5,
            right: 40,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8A2BE2" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statistics;