import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/29147847?s=460&u=14c41901b4abe559dab7c4c7ecb7898474f266a4&v=4" alt="Thays Casado"/>
      <div>
        <strong>Thays Casado</strong>
        <p>
          <img src="icons/level.svg" alt="Level arrow"/>
          Level 1
        </p>
      </div>
    </div>
  );
}