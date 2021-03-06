import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json'
import Cookies from 'js-cookie';


interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;

}

interface ChallengeContextData {
  level: number; 
  currentExperience: number; 
  challengesCompleted: number; 
  levelUp: () => void;
  startNewChallange: () => void; 
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  // Component reac use import reactNode to accept children
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState (0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  // Formula to next level
  const experienceToNextLevel = Math.pow((level + 1) * 4 , 2);

  // 
  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));

  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange(){
    // Pick a random challenge
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    if (Notification.permission == 'granted'){
      new Notification('Novo desafio',{
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  
  function completeChallenge() {
    // Validation; the user cannot call it if they have the challenge active
    if(!activeChallenge){
      return;
    }
    new Audio('/notification.mp3')
    
    const { amount } = activeChallenge;

    // let it change "let"
    let finalExperience = currentExperience + amount;

    // Check to see if it user leveled up 
    if( finalExperience >= experienceToNextLevel){
      // Add the rest of the xp to the finalExperience
      finalExperience = finalExperience - experienceToNextLevel;
      // Increase the level
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);


  }

  return(
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp, 
        startNewChallange,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}