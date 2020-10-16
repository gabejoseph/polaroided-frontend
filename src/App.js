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
  const [posts, setPosts] = useState([
    {
      username: "cleverqazi",
      caption: "Wow it works",
      imageUrl: "https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"
    }
  ]);

  // useEffect Runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where the code runs
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
      users.map()
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
            posts.map(post => (
              <Post 
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))
          }

      </div>
  );
}

export default App

