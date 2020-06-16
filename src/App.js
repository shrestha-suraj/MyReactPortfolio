import React from 'react';
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <main>
        <Home/>
        <Profile/>
        <Experience/>
        <Projects/>
        <Resume/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
