import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/53150996?s=460&u=13e1c2d6d90ee4f344bd82d7d25150cb26609067&v=4" alt="César augusto"/>
      <div>
        <strong>César Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
    
  )
}