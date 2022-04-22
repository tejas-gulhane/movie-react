import './style.css';
import Card from './Card';
import axios from 'axios'
import React, { useState } from 'react';
function App() {


  const [movie, updatemovie] = useState('Search Movie Here...');
  let [responce, updateresponce] = useState([]);

  const fetchmovie = () => {
    axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=8a057f8f`).then((element) => {
      updateresponce(element.data.Search);
    })
  }

  const searchicon = () => {

    fetchmovie();

  }



  return (
    <>
      <div className="landing-page">
        <div className="navbar">
          <div>
            <button>IMDb</button>
          </div>
          <div className='search'>
            <input type="text" value={movie} onChange={(e) => { updatemovie(e.target.value) }} />
            <i className='fas fa-search' onClick={searchicon}></i></div>
          <div>
            <i className='fas fa-bars'></i>
          </div>
        </div>


        <Card 
        responce={responce}/>

      </div>
    </>
  );
}

export default App;
