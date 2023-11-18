import React from 'react';
import "./works.css";
import Med from "../../NewPort/medilisticN.jpg";
import Stream from "../../NewPort/intro.jpg";


const Works = () => {
  return (
    <section id='works'>
        <h2 className='wTitle'>My Portfolio</h2>
        <span className='wDesc'>It shows projects that depict my skills </span>
        <div className='wImgs'>
            <img src={Med} alt='' className='Wimg' />
            <img src={Stream} alt='' className='Wimg' />
        </div>
        <button className='wBtn'>Explore more</button>
    </section>
  )
}

export default Works