import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json'


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
}

interface ChallengesProviderProps {
  // Component reac use import reactNode to accept children
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState (30);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  // Formula to next level
  const experienceToNextLevel = Math.pow((level + 1) * 4 , 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange(){
    // Pick a random challenge
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
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
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}