import React from 'react';
import './contact.css';
import twitter from '../../NewPort/twitter.png';
import linkedin from '../../NewPort/linkedin.png';
import github from '../../NewPort/github.png'


const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={twitter} alt='twitter' className='link' />
                    <img src={linkedin} alt='linkedin' className='link' />
                    <img src={github} alt='github' className='link' />
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact