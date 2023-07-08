import './App.css';
import {useState} from 'react';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
function App() {
  const [trailerURL, setTrailerURL] = useState("");
  const [id , setID] = useState(0);
  function setURL(url, id) {
    setTrailerURL(url);
    setID(id);
  }
  return (
    <div className="app">
      <Navbar/>
      <Banner />
      <Row id={1} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeImage={true}/>
      <Row id={2} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row id={3} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row id={4} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row id={5} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row id={6} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row id={7} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row id={8} trailerURL={trailerURL} trailerID={id} setURL={setURL} title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
