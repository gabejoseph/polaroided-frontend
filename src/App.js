// import Home from './containers/Home'
// import Header from './components/Header'
import { useState, useEffect } from 'react';
import Footer from './Footer';
import React from 'react';
import Header from './Header';
import User from './user';
import Photo from './photo'
import './App.css';
import Post from './Post';
import Component from 'react'


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

          {console.log(posts, photos)}

          {
            console.log(difference)
          }

      </div>
  );
}

export default App
