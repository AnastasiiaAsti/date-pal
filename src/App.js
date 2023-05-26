import './App.css';
import { useState } from 'react';
import activities from "./data/activities";
import areas from './data/areas';
import cocktails from './data/cocktails';
import movies from './data/movies';
import outfits from './data/outfits';
import Logo from './components/Logo/Logo';
import ShapeOne from './components/ShapeOne/ShapeOne';
import ShapeTwo from './components/ShapeTwo/ShapeTwo';
import ShapeFour from './components/ShapeFour/ShapeFour';
import ShapeFive from './components/ShapeFive/ShapeFive';
import LittleStar from './components/LittleStar/LittleStar';

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
    <div className="App" scroll="no">
      <Logo />
      <ShapeOne />
      <ShapeTwo />
      <div className="shape-3">
        <div
          onClick={() => {
            handleRandomSelectionActivity()
            handleRandomSelectionArea()
            handleRandomSelectionCocktail()
            handleRandomSelectionMovie()
            handleRandomSelectionOutfit()
          }}
          className='btn'>
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
              </div>
              <div className="mouth"></div>
        </div>
        
      </div>
      <LittleStar/>
      <ShapeFour/>
      <div className="thing">
      <LittleStar/>
        <p className='one'>Activity: <span>{randomActivity}</span> </p>
        <p className='two'>Area: <span>{randomArea}</span></p>
        <p className='three'>Cocktail: <span>{randomCocktail}</span> </p>
        <p className='four'>Movie: <span>{randomMovie}</span> </p>
        <p className='five'>Outfit: <span>{randomOutfit}</span></p>
      </div>
    <ShapeFive/>
  </div> 

  );
}

export default App;
