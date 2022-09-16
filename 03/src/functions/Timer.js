import { useEffect, useState } from 'react';

function Timer(){
    const [hours,setHours] = useState(24);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
        if(parseInt(minutes) === 0){
            if (parseInt(hours) === 0) {
                clearInterval(countdown);
              } else {
                setMinutes(parseInt(hours) - 1);
                setSeconds(59);
              }
        }
      }, 1000);
      return () => clearInterval(countdown);
    },[hours,minutes, seconds]);

    return(<>
        <h2>
        {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
    </>);
}
export default Timer;
