import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){

  // Set the timer
  const[time, setTime] = useState(25 * 60);
  // state to check if the countdown is active or not (it starts false)
  const [active, setActive] = useState(false);


  // Get minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Convert the int to String
  // Test if there is 2 spaces, if not add a 0 on the left (padStart)
  // Then split into 2 in array -> set one side and the other
  // ex.: 25 => "2" "5"   5 => "0"  "5"
  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const[secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
  
  
  // function to reduce second by second when clicked the button
  function startCountdown(){
    setActive(true);    
  }

  /*
  Explanation:
  UseEffect is a hook for collateral damage -> when something happen do something else
  It has two parameters:
    - The first one is -> what will be executed (always a function -> arrow function)
      -- check if countdown is active and time is grater than zero
        -- execute another function (setTimeout) AFTER one second
          -- timeoutfunction -> reduce one second of the time.
    - Second one is -> when i want to execute it
      -- when active and time change.
  */
  useEffect(()=> {
    if(active && time > 0){
      setTimeout(() => {
        setTime(time-1);
      }, 1000)
    }
  }, [active, time])

  return(
    <div>
      <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

    <button type="button"
    className={styles.countdownButton}
    onClick={startCountdown}>
      Iniciar um ciclo
    </button>
    </div>
  );

}