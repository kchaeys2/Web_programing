import { useEffect, useState } from 'react';

function Timer(){
    const [hours,setHours] = useState(1);
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(2);
  
    useEffect(() => {
      const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if(parseInt(minutes)===0){
            clearInterval(countdown);
          }else{
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
        if(parseInt(minutes) === 0){
            if (parseInt(hours) === 0) {
                clearInterval(countdown);
              } else {
                setHours(parseInt(hours) - 1);
                setMinutes(59);
              }
        }
      }, 1000);
      return () => clearInterval(countdown);
    },[hours,minutes, seconds]);

    return(<>
        <h2>
        {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
    </>);
}
export default Timer;
