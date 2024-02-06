import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* RandomColor component */}
      <RandomColor />

      {/* Stars rating component */}
      <StarRating />

    </div>
  );
}

export default App;
