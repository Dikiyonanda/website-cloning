
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Index';
import HeroSection from './components/Header/Index';
import Footer from './components/Fotter/Index';
import Services from './components/Service/index'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './components/List/index';
import Course from './components/Course/index'
import Home from './components/Home'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <List />
        <Services />
        <Cards />
        <Footer />
        <Switch>
          <Route path='/Course' exact component={Home} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
