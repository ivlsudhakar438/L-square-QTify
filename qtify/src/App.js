// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
    </div>
  );
}

export default App;
