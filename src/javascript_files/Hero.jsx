import React from "react";
import "../css_files/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <figure>
        <video src="/videos/lcc.mp4" autoPlay loop muted></video>

        <figcaption>
        Grow Your Brand with Powerful Online Marketing.
         <br />Smart Strategies, Engaging Content, and Real Results
        </figcaption>
      </figure>
    </div>
  );
}

export default Hero;
