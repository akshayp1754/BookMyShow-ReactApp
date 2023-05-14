import "./App.css";
import Recommened from "./components/Recommened";
import SliderImages from "./components/SliderImages";
import Trending from "./components/Trending";
import Header from "./components/Header";
import CardSlider from "./components/CardSlider";
import Premier from "./components/Premier";
import Footerr from "./components/Footerr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMoviesFetch from "./components/AllMoviesFetch";
import SingleMovieFetch from "./components/SingleMovieFetch";
import Registration from "./components/Registration";
// import AllMovies from "./components/AllMovies";

function App() {
  const hover= () => {
    const handleMouseOver = (e) => {
      e.target.style.cursor = 'pointer';
    };
  
    const handleMouseOut = (e) => {
      e.target.style.textDecoration = 'none';
    };}
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SliderImages />
                <Recommened />
                <CardSlider />
                <Premier />
                <Trending />
              </>
            }
          />
          <Route exact path="/movies" element={<AllMoviesFetch/>} />
        <Route exact path="/movies/:movid" element={<SingleMovieFetch/>}></Route>
        <Route exact path="/register" element={<Registration/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footerr />
    </div>
  );
}

export default App;
