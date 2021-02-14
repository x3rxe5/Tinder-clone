import React from "react";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/TinderCards";
import SwipeButtons from "./components/Swipe/SwipeButtons";
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
