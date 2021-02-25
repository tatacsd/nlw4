import { createContext, useState, ReactNode } from 'react';

interface ChallengeContextData {
  level: number; 
  currentExperience: number; 
  challengesCompleted: number; 
  levelUp: () => void;
  startNewChallange: () => void;  
}

interface ChallengesProviderProps {
  // Component reac use import reactNode to accept children
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState (0);
  const[challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange(){
    console.log('New Challenge')
  }


  return(
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp, 
        startNewChallange
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}