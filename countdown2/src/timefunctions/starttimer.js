import {startintervals} from './startintervals' 
import moment from 'moment'
export let starttimer=(date,setintervaltime,setintervals)=>
{
    let spec=moment(date,'DD/MM/YYYY hh:mm:ss')
     
    let now=moment()
   // console.log("today",now)
    let interval=spec.diff(now,'second')
   let days=parseInt(interval/(60*60*24))
   let hours=parseInt((interval-days*60*60*24)/(60*60))
   let minutes=parseInt((interval-days*60*60*24-hours*60*60)/(60))
   let seconds=parseInt((interval-days*60*60*24-hours*60*60-minutes*60))
 ///  console.log("timer started  ")
   setintervaltime(prev=>{return {...prev,
    
     days:days,
     hours,
     minutes,
     seconds
   }})
   startintervals(setintervaltime,setintervals)
}