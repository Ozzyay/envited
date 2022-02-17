import Header from "../layout/Header";
import { useDispatch } from "react-redux";
import styles from './Create.module.css';
import { useRef } from "react";
import { eventActions } from "../../store/eventSlice";
const Create = () => {
  const eventName = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);
  const eventLocation = useRef(null);
  const dispatch = useDispatch();
  const submitHandler = (e:any) => {
    e.preventDefault();
        //@ts-ignore
    console.log(typeof (startTime.current.value));
        //@ts-ignore
    if (!eventName.current.value || !startTime.current.value || !endTime.current.value || !eventLocation.current.value) {
      alert("Please fill out all the fields for the form!");
      return;
    }
    dispatch(eventActions.addToEvents({
          //@ts-ignore
      name: eventName.current.value,
          //@ts-ignore
      startTime: startTime.current.value,
          //@ts-ignore
      endTime: endTime.current.value,
          //@ts-ignore
      location: eventLocation.current.value

    }));
  };
  return (
  <><Header />
  <div className={styles.card}>
    <h3 className={styles.title}>Create New Event</h3>
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
      <label htmlFor="eventName">Event Name: </label>
      <input type="text" id="eventName" ref={eventName} className={styles.inputs}/>
      </div>
      <div>
        <label htmlFor="eventStartTime">Start Time: </label>
        <input type="datetime-local" id="eventStartTime" className={styles.inputs} ref={startTime}/>
      </div>
      <div>
        <label htmlFor="eventEndTime">End Time: </label>
        <input type="datetime-local" id="eventEndTime" className={styles.inputs} ref={endTime}/>
      </div>
      <div>
        <label htmlFor="eventLocation">Location: </label>
        <input type="text" id="eventLocation" className={styles.inputs} ref={eventLocation}/>
      </div>
      <button type="submit">Create Event</button>
    </form>
  </div>
  </>
  )
};

export default Create;
