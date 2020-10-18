// import Home from './containers/Home'
// import Header from './components/Header'
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Post from './Post';


function App() {
  const BASE_URL = "https://polaroided-backend.herokuapp.com"
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  // useEffect Runs a piece of code based on a specific condition

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => setPosts(users))
  }, [])

  useEffect(() => {
    fetch(`${BASE_URL}/photos`)
    .then(resp => resp.json())
    .then(photos => setPhotos(photos))
  }, [])


  return (
      <div className="App" >
        <div className="app__header" >
          <img 
            className="app__headerImage"
            src="https://i.imgur.com/ZwFwl3E.jpg"
            alt=""
          />
        </div>

        { 
        photos 
        ? 
        photos.map(photo => 
          <Post
            users={posts}
            key={photo.id}
            caption={photo.caption}
            imageUrl={photo.img_src}
            photo={photo}
          />
          
        )
        :
        <p>noData</p>
        }

      </div>
  );
}

export default App
