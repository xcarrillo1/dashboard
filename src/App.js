import React from 'react';
import AvgRating from "./components/AvgRating.js";
import Reviews from './components/Reviews.js';
import SentimentalAna from './components/SentimentalAna.js';
import Sidebar from './components/Sidebar.js';
import WebsiteVis from './components/WebsiteVis.js';
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Reviews revTotal="1,281" />
      <AvgRating rating="4.6" />
      <SentimentalAna analysis="960 122 321" />
      <WebsiteVis visits="821" />
    </div>
  );
}

export default App;
