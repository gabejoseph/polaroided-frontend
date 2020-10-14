// import Home from './containers/Home'
// import Header from './components/Header'
import { useState } from 'react';
import Footer from './Footer';
import React from 'react';
import Header from './Header';
import User from './user';
import Photo from './photo'
import './App.css';
import Post from './Post';


function App() {
  const [posts, setPosts] = useState([
    {
      username: "",
      caption: "",
      imageUrl: ""
    },
    {
      username: "",
      caption: "",
      imageUrl: ""
    }
  ]);

  return (
      <div className="App" >
          <div className="app__header" >
            <img 
              className="app__headerImage"
              src="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
            {/* <User /> */}
          </div>
          <Post username="cleverqazi" caption="Wow it works" imageUrl="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" />
          <Post username="Gabe" caption="heyhey" imageUrl="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" />
          <Post username="Mal" caption="oknow" imageUrl="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"/>
      </div>
  );
}

export default App

