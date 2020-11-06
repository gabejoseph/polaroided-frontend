// import Home from './containers/Home'
// import Header from './components/Header'
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Post from '../src/components/Post';
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  // const BASE_URL = "https://polaroided-backend.herokuapp.com"
  const BASE_URL = "http://localhost:4000"

  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  // useEffect Runs a piece of code based on a specific condition

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => setPosts(users))
    
  }
  , [])

  useEffect(() => {
    fetch(`${BASE_URL}/photos`)
    .then(resp => resp.json())
    .then(photos => setPhotos(photos))
  }, [])

  return (
    
      <div className="App" >
        <Router>
          <Header />

          
          <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              { 
              photos 
              ? 
              photos.map(photo =>

                
                <Route 
                  path="/" 
                  component={Post} 
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
          </ Switch>


          <Footer />
        </Router>
      </div>
  );
}

export default App
