import React from 'react';
//import './App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='header'>
      <div className="jumbotron">
        <div className="text-top">
          <h1>Belajar Pemrogramman
            <br />
            <span>daridasar.com</span>
          </h1>
          <p>Mulai karirmu di dunia pemrogamming dengan belajar pemrogramman bersama kami dari dasar</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." className="input-search"></input>
          <button className="btn-search"><i class="fa fa-search"></i></button>
        </div>
        </div>
    </div>
  );
}

export default HeroSection;