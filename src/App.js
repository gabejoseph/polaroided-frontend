// import Home from './containers/Home'
// import Header from './components/Header'
import Footer from './Footer'
import React from 'react';
import Header from './Header'
import User from './user'
import Photo from './photo'
import './App.css'


function App() {
  return (
      <div className="App" >


          <Header className="app__header" />
          <User />
          <Footer />



      </div>
  );
}

export default App

