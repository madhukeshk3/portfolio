import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';
import { CssBaseline, Grid } from '@material-ui/core';


function App() {
  return (
    <div >
    <Header/>
    <div  className="app">
        <Intro />
        <Projects />
        <Contact />
       
      <CssBaseline/>
    </div>
    <Footer/>
    
    </div>

    

  );
}

export default App;
