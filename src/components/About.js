import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Chepkemoi</p>
      <img src={image} alt="I did this" />
    </div>
  ) 
  
}

export default About;