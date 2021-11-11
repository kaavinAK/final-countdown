export let startintervals=(setintervaltime,setintervals)=>
{
    let secondinterval=setInterval(()=>
    {
      setintervaltime(prev=>{
        return {
          ...prev,
          seconds:prev.seconds-1
        }
      })
    },1000)
    setintervals(prev=>{return {...prev,
    secondinterval:secondinterval
    }})
}