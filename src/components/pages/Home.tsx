import Header from "../layout/Header";
import iconsGrouped from '../../assets/iconsGrouped.png';
import styles from './Home.module.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.homeBg}>
    <Header></Header>
    <div className="icons">
      <img src={iconsGrouped} alt="Social icons" className={styles.iconsImg}/>
    </div>
    <div className={styles.typographyLarge}>Facebook events without Facebook.</div>
    <p className={styles.typographySmall}>Easily host and share events with your friends across any social media.</p>
    <Link to="/create"><button type="button" className={styles.addEventButton} >🎉 Create my next event</button></Link>
    <div className={styles.productLeft} />
    <div className={styles.productMiddle} />
    <div className={styles.productRight} />
    </div>
    )
};


export default Home