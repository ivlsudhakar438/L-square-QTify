import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import TopAlbums from "./TopAlbums/TopAlbums";
import NewAlbums from "./NewAlbums/NewAlbums";
import SongsList from "./SongsList/SongsList";

const Home = () => {
  return (
  <div>
    <Navbar />
    {/* <h1>Home Component</h1> */}
    <Hero />
    <TopAlbums />
    <NewAlbums />
    <SongsList />
  </div>);
}
export default Home;