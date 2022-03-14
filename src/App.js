import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText, " is the search text");
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1b72cb7fa3d1832e65e2421c9f4b1bb6&language=en-US&query=${searchText}&page=1&incl
      ude_adult=false`)
      .then(res =>{return res.json()})
      .then(data => {
        setSearchResults(data.results)
      })
      .catch(err => console.error(err));


  }, [searchText]);
  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
