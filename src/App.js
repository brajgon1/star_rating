import "./App.css";
import StarRating from "./components/star_rating";

function App() {
  return (
    <div className="App">
      {/* <StarRating noOfStars={10}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
    </div>
  );
}

export default App;
