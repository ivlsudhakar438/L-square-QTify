// import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import TopAlbums from "./components/TopAlbums/TopAlbums";
// import NewAlbums from "./components/NewAlbums/NewAlbums";
// import SongsList from "./components/SongsList/SongsList";
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';


function App() {
      // <Navbar />
      // <Hero />
      // <TopAlbums />
      // <NewAlbums />
      // <SongsList />
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

