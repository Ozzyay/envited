import styles from './Header.module.css';
import React from 'react';
import envitedLogo from '../../assets/envitedLogo.png';
const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.cont1}>
      <img src={envitedLogo} alt="envitedLogo" />
      <h2 className={styles.heading}>envited</h2>
      </div>
      <div className={styles.cont2}>
        <button className={styles.button}>Log In</button>
      </div>
    </nav>
  )
};


export default Header;