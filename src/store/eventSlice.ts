import { createSlice } from "@reduxjs/toolkit";
import { EventInfo } from "../components/types";

let initialEvent = {};
  if (localStorage.getItem('events') !== null) {
    //@ts-ignore
    initialArray = JSON.parse(localStorage.getItem('events')); 
  }

const initialValue: {
  events: EventInfo,
} = {
  events: initialEvent,
};

const eventSlice = createSlice({
  name: "events",
  initialState: initialValue,
  reducers: {
    addToEvents(state, action) {
      state.events = action.payload;
      localStorage.setItem('events', JSON.stringify(state.events));
    }  
  }
});

export const eventReducer = eventSlice.reducer;
export const eventActions = eventSlice.actions;