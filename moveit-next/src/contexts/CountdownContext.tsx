import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext ({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

  const { startNewChallange } = useContext(ChallengesContext);
  
  // STATES
  // Set the timer
  const[time, setTime] = useState(0.1 * 60);
  // state to check if the countdown is active or not (it starts false)
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false)


  // Get minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // function to reduce second by second when clicked the button
  function startCountdown(){
    setIsActive(true);    
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
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
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time-1);
      }, 1000)
    } else if(isActive &&  time == 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallange();
    }
  }, [isActive, time])

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
     }}>
      {children}
    </CountdownContext.Provider>
  );
}