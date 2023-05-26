import './App.css';
import { useState } from 'react';
import activities from "./data/activities";
import areas from './data/areas';
import cocktails from './data/cocktails';
import movies from './data/movies';
import outfits from './data/outfits';

function App() {
  const [randomActivity, setRandomActivity] = useState(null);
  const [randomArea, setRandomArea] = useState(null)
  const [randomCocktail, setRandomCocktail] = useState(null)
  const [randomMovie, setRandomMovie] = useState(null)
  const [randomOutfit, setRandomOutfit] = useState(null)


  
const handleRandomSelectionActivity = () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const selectedElement = activities[randomIndex];
  setRandomActivity(selectedElement);
};
  
  const handleRandomSelectionArea = () => {
    const randomIndex = Math.floor(Math.random() * areas.length);
    const selectedElement = areas[randomIndex];
    setRandomArea(selectedElement);
  };

  const handleRandomSelectionCocktail = () => {
    const randomIndex = Math.floor(Math.random() * cocktails.length);
    const selectedElement = cocktails[randomIndex];
    setRandomCocktail(selectedElement);
  };

  const handleRandomSelectionMovie= () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedElement = movies[randomIndex];
    setRandomMovie(selectedElement);
  };

  const handleRandomSelectionOutfit = () => {
    const randomIndex = Math.floor(Math.random() * outfits.length);
    const selectedElement = outfits[randomIndex];
    setRandomOutfit(selectedElement);
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
        <button
          onClick={() => {
            handleRandomSelectionActivity()
            handleRandomSelectionArea()
            handleRandomSelectionCocktail()
            handleRandomSelectionMovie()
            handleRandomSelectionOutfit()
          }}
          className='btn'>GENERATE</button>
      </div>
      <div className="shape-4">
        <div className="arrow">
        <div className="curve"></div>
        <div className="point"></div>
            </div>
      </div>
      <div className="thing">
        <p className='one'>Activity: {randomActivity}</p>
        <p className='two'>Area: {randomArea}</p>
        <p className='three'>Cocktail: {randomCocktail}</p>
        <p className='four'>Movie: {randomMovie}</p>
        <p className='five'>Outfit: {randomOutfit}</p>
      </div>
  </div> 

  );
}

export default App;
