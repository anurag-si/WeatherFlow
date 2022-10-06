import React, { useEffect } from 'react'
import './Card1.css'
import { useState } from 'react';

import axios from 'axios'
import Card2 from '../Card Output/Card2';
import Error from '../Error/Error';
const Card1 = () => {
  const [error,setError]=useState(false);
  const [count,setCount] = useState(0);
  const [city,setCity]=useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86b862a836cc84618fbb6187f128fe27`;
  const [data,setData]=useState('');

  const searchLocation = () => {
    axios.get(url).then((response) => 
    {
      setData(response.data)
      console.log(response.data)
    }
    )
  }  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!city)
    {
      setError(true);
      console.log(error);
    }
    else
     { 
      setCount(1);
      setError(false);
      searchLocation();
      setCity('');
    }
  }


  if(count === 0)
    {return (
      <div className='container'>
          <div className='card'>
      <form onSubmit={handleSubmit}>
      <label className='label'>Enter Place Name</label><br/>
        <input type="text" name="name" onChange={(e) => setCity(e.target.value)} placeholder="Enter City"/>
        <br/>
        <button className="submit" type="submit">Submit</button>  
        </form>
        {error && <Error />}
      </div>
      
      </div> 
    )}
      
  if(count == 1 ){
      return(
        <div>
          <Card2 data={data} 
          count={count}
          setCount={setCount}
          />
        </div>
      )
    }   
    
//     if(error == 5)
//     {
//       return(
//         <div>
// <Error />
//         </div>
          
        
//       )
//     }
  }

export default Card1