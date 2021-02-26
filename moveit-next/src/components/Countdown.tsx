import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext }  from '../contexts/CountdownContext';



export function Countdown(){

  // import useContext from the react
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);
  
  // Convert the int to String
  // Test if there is 2 spaces, if not add a 0 on the left (padStart)
  // Then split into 2 in array -> set one side and the other
  // ex.: 25 => "2" "5"   5 => "0"  "5"
  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const[secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
  

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

    { hasFinished ? (
      <button
        disabled 
        className={styles.countdownButton}
      >
        Ciclo encerrado
      </button>

    ) : (
      <>
        { isActive ? (
          <button 
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar ciclo
          </button>
        ) : (
          <button 
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
        </button>
    )}

      </>
    )}        
    </div>
  );

}