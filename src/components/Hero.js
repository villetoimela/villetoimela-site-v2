import React from "react";
import InfiniteScroll from "./InfiniteScroll";

function Hero() {
  return (
    <>
    <InfiniteScroll />
      <div className="bg"></div>
  
      <header className="hero__header">
        <h1 className="hero-first-text">VILLE</h1>
        {/* <div className="asterisk">
          <img src="/asterisk.svg" alt="Asterisk" />
        </div> */}
        <h1 className="hero-second-text">TOIMELA</h1>
        <h2 className="hero-third-text">Web Developer</h2>
        <div className="hero-info-wrapper">
          <p className="hero-info-text">
            I am a passionate web developer with some experience in creating diverse websites and web applications using various technologies and programming languages.
          </p>
        </div>
        
      </header>
    </>
  );
}

export default Hero;