
import { useEffect, useState } from 'react';
import '../App.css';

import {starttimer} from '../timefunctions/starttimer'
import {motion,useAnimation} from 'framer-motion'
import {stopintervals} from '../timefunctions/stopintervals'


function App({date,sliderno,intervaltime,setintervaltime,intervals,setintervals,direction}) {
 
 //console.log("before unmounted--- ",date)
  let divanimate=useAnimation()
  let h1animate=useAnimation()
  useEffect(()=>
  {
    //  console.log("before befoore unmount")
    divanimate.start({
      opacity: 1,
      x:0,
      transition: {
        duration:1
      }
    })
    h1animate.start({
      opacity: 1,
      transition:{
        duration:3
      }
    })
     
    return ()=>{  console.log("unmounted ") 
  
  



    return stopintervals(intervals)}
  },[])
  

  useEffect(()=>
  {
    try{
       stopintervals(intervals)
    }
    catch(e){
console.log("wrong in stopping interval come bruh ")
    }
    finally{
         starttimer(date,setintervaltime,setintervals)
    }

    
    //bruh
   
  },[date])
  useEffect(()=>
  {
    if(intervaltime.seconds==0 && intervaltime.minutes!=0)
    {
       setintervaltime(prev=>
        {
          return {...prev,minutes:prev.minutes-1,seconds:60}
        })
    }
    if(intervaltime.minutes==0 && intervaltime.hours!=0)
    {
      setintervaltime(prev=>{
        return {...prev,minutes:60,hours:prev.hours-1}
      })
    }
    if(intervaltime.hours==0 && intervaltime.days!=0)
    {
      setintervaltime(prev=>{
        return {
          ...prev,
          hours:24,
          days:prev.days-1
        }
      })
    }
    if(intervaltime.minutes==0 && intervaltime.hours==0 && intervaltime.seconds==0 && intervaltime.days==0)
    {
      stopintervals(intervals)
    }
    
  },[intervaltime])
  return <>
  <motion.div class="container" 
  animate={divanimate} initial={direction=='right'?{
    opacity: 0,
    x:'-70%'
  }:{
    opacity: 0,x:'60%'
  }}
  >
 
  <div id="timer">
    
<div class="days"> 
  <div class="numbers">{intervaltime.days}</div>DAYS</div>
<div class="hours"> 
  <div class="numbers">{intervaltime.hours}</div>HOURS</div>
<div class="minutes"> 
  <div class="numbers">{intervaltime.minutes}</div>MINUTES</div>
<div class="seconds"> 
  <div class="numbers">{intervaltime.seconds}</div>SECONDS</div>
</div>
  
<div style={{
  
  marginBottom:'30%'
}}>
  <motion.h1 animate={h1animate} initial={{
    opacity: 0
  }}    >/*INSERT TITLE*/</motion.h1>
</div>
</motion.div>

  </>
}

 export default App