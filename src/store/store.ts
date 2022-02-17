import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { eventReducer } from "./eventSlice";
const store = configureStore({
  reducer: {
    events: eventReducer
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type EventDispatch = typeof  store.dispatch;
export const useEventDispatch = () => useDispatch<EventDispatch>();

export default store;
