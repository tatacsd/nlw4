import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css'


export function ExperienceBar(){
  // get user experience information 
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);


  return(
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        {/* it is inline because the css file is for unmutable things. */}
        <div style={{ width: '50%' }} />

        <span className= { styles.currentExperience} style={{ left: '50%' }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}