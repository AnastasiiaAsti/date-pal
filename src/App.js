import './App.css';
import { useState } from 'react';
import activities from "./data/activities";
// import areas from './data/areas';
// import cocktails from './data/cocktails';
// import movies from './data/movies';
// import outfits from './data/outfits';

function App() {
  const [randomActivity, setRandomActivity] = useState(null);
  // let generatedIdea = []

  
const handleRandomSelectionActivity = () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const selectedElement = activities[randomIndex];
  setRandomActivity(selectedElement);
};


  return (
    <div className="App">
        <p className='logo'>Date Pal</p>
      <div className='logo-shape'>
      <p className='logo'>Date Pal</p>
      </div>
      <div className="shape-1">
        <p>Hey! Need an inspiration<br></br> for your day?</p> 
      </div>
      <div className="shape-2">
        <p>press <br></br>the button</p>
      </div>
      <div className="shape-3">
        <button onClick={handleRandomSelectionActivity} className='btn'>GENERATE</button>
      </div>
      <div className="shape-4">
        <div className="arrow">
        <div className="curve"></div>
        <div className="point"></div>
            </div>
      </div>
      <div className="thing">
      <p>Activity: {randomActivity}</p>
      </div>
  </div> 

  );
}

export default App;
