import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import Event from './components/pages/Event';
function App() {
  return (
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/event" element={<Event />} />
      </Routes>
  );
}
export default App;
