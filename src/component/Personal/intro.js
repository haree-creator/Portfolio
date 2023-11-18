import React from 'react'
import './intro.css';
import hire from '../../NewPort/hire.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='contentIntro'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Haree</span><br />Software Developer</span>
            <p className='introPara'>I am a skilled software developer with experience in helping <br /> start-up grow.</p>
            <Link><button className='btn'><img src={hire} alt='hire' className='btnImg' /> Hire Me</button></Link>
        </div>
        <img src='' alt='' className='imageP' />
    </section>
  )
}

export default Intro