import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import coverPhoto from '../../assets/coverPhoto.png';
import styles from './Event.module.css'
import goingButton from '../../assets/goingButton.png';
import notGoingButton from '../../assets/notGoingButton.png';
import maybeButton from '../../assets/maybeButton.png';

const dummyData = {
  name: "Dummy Event Data",
  startDate: "17/02/2022",
  startTime: "02:00PM",
  endDate: "17/02/2022",
  endTime: "03:00PM",
  location: "123 Dummy Street",
  description: "Just some dummy data as I didn't get around to including the full redux state functionality in the given time limit"
}

const Event = () => {
  const eventData:any = useSelector<RootState>(state => state.events.events);
  if (!eventData) {
    return <div></div>
  }

  return (<>
  <img src={coverPhoto} alt="event background" className={styles.img}/>
  <div className={styles.container}>
  <div className={styles.title}><div className={styles.icon}>🎉</div>
  <div className={styles.heading}>{dummyData.name}</div>
  </div>
  <p className={styles.host}>Hosted by NotAdded</p>
  <img src={goingButton} className={styles.going} alt="going"/>
  <img src={maybeButton} className={styles.maybe} alt="maybe"/>
  <img src={notGoingButton} className={styles.notGoing} alt="going"/>

  <button className={styles.inviteButton}></button>
  <button className={styles.settingsButton}></button>
  <div className={styles.calenderIcon}>📅</div>
  <div className={styles.eventStart}>{dummyData.startDate} {dummyData.startTime}</div>
  <div className={styles.eventEnd}>to {dummyData.endDate} {dummyData.endTime}</div>
  <div className={styles.Location}>{dummyData.location}</div>
  </div>
  </>)
};

export default Event;