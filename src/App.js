import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Post from '../src/components/Post';
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Image from './components/Image'
import { Modal } from '@material-ui/core';

function App() {
  const BASE_URL = "https://polaroided-backend.herokuapp.com"
  // const BASE_URL = "http://localhost:4000"

  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => setUsers(users))
    
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
              <button type="button" onClick={() => setOpen(true)}>
                Open Modal
              </button>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {<p>I am a modal</p>}
              </Modal>
          
          <Switch>

              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/image" component={Image} />
              { 
                photos && users
                ? 
                photos.map(photo =>

                   <Post 
                     users={users}
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
