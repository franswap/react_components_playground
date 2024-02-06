import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      
      {/* Accordian component */}
      <Accordian />

      {/* RandomColor component */}
      <RandomColor />

      <h1>SYSTEME DE NOTATION AVEC LES ETOILES</h1>
      {/* Stars rating component */}
      <StarRating />

      <h1>IMAGES SLIDER</h1>
      {/* Image Slider component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} />

    </div>
  );
}

export default App;
