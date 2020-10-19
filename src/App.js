// import Home from './containers/Home'
// import Header from './components/Header'
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Post from './Post';
import Footer from './Footer'
import Header from './Header'


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
        <Header />

        { 
          photos 
          ? 
          photos.map(photo => 
            <Post
              users={posts}
              key={photo.id}
              user_id={photo.user_id}
              caption={photo.caption}
              imageUrl={photo.img_src}
              photo={photo}
            />
          )
          :
          <p>noData</p>
        }

      <Footer />
      </div>
  );
}

export default App
