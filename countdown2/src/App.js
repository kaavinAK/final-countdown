
import React ,{ useEffect, useState } from 'react';

import './App.css';
import moment from 'moment'

import Slider from './boilerplate/slider'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
let datecheck=(date)=>
{
  let spec=moment(date,'DD/MM/YYYY hh:mm:ss')
  
if(spec.unix()>Date.now()/1000)
{
//  console.log(spec.unix() ,' -----  ',' now -- --- ',Date.now()/1000)
  console.log("date check")
  return true
}
else
{
  return false
}
}
let App=()=>
{
  let array=['05/12/2021','07/12/2021','08/1/2022','10/11/2021','15/11/2021']
  let [direction,setdirection]=useState('left')
  let [sliderno,setsliderno]=useState(0)
  let [intervaltime,setintervaltime]=useState({
    days:'',
    hours:'',
    minutes:'',
    seconds:''
  })
  
  let [intervals,setintervals]=useState({
    
    secondinterval:''
  })
 // console.log("slider man --- ",sliderno)
 
  let slideleft=()=>
  {
    setdirection('left')
    setsliderno(prev=>
      {
        return (prev+1)%array.length
      })
  }
  let slideright=()=>
  {
    setdirection('right')
    setsliderno(prev=>{
      if(prev==0)
      {
        return array.length-1
      }
      else
      {
        return (prev-1)%array.length
      }
    })
  }
  return <>
  <div className='all' style={{
   
   
  }}>
  <ArrowBackIosNewRoundedIcon style={{
          height: "50px",
          width:"50px",
          color:"#daf6ff",
          position: 'absolute',
          top:'25%',
          left:'2%',
        
          zIndex:1,
         
          
    }} onClick={slideleft}   />
     <ArrowForwardIosRoundedIcon style={{
          height: "50px",
          width:"50px",
          color:"#daf6ff",
          position: 'absolute',
          top:'25%',
          left:"93%",
      
          zIndex:1,
        
          
              
    }} onClick={slideright} />
  <div className='slidebox' >
     
   
   
    {
      array.map((date)=>
      {
        if(array[sliderno]==date)
        {
          return <>
          {true &&        <Slider direction={direction} date={date} sliderno={sliderno} intervaltime={intervaltime} setintervaltime={setintervaltime} intervals={intervals} setintervals={setintervals}   />
    }
          </>
        }
      })
    }
      
  </div>
  </div>
  </>
}

export default App;
