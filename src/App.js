import './App.css';
import StarRating from './components/star_rating';

function App() {
  return (
    <div className="App">
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
