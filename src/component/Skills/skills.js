import React from 'react';
import "./skills.css";
import ui from "../../NewPort/UIdesign.png";
import web from "../../NewPort/web-development.png";
import app from "../../NewPort/app-development.png";

const Skills = () => {
  return (
   <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillSumm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        <div className='skillBars'>
            <div className='skillbar'>
                <img src={ui} alt='ui design' className='skillbarImg' />
                <div className='skillbarText'>
                    <h2>UI/UX Design</h2>
                    <p>UX design refers to the term “user experience design”, while UI stands for “user interface design”.
                    Both elements are crucial to a product and work closely together.</p>
                </div>

            </div>

            <div className='skillbar'>
                <img src={web} alt='web' className='skillbarImg' />
                <div className='skillbarText'>
                    <h2>Web Development</h2>
                    <p>Web developers are responsible for how a website or web application looks and functions,
                     from its user interface and page layout to back-end systems for gathering data</p>
                </div>

            </div>

            <div className='skillbar'>
                <img src={app} alt='app' className='skillbarImg' />
                <div className='skillbarText'>
                    <h2>Software Development</h2>
                    <p>Software developers invent, manage, and optimize computer programs that run on desktops, laptops, smartphones, and other mobile devices. 
                    Using different programming languages ― such as Java, Python, C#, and SQL ― these computer science professionals write complex code that governs how desktop applications function.</p>
                </div>

            </div>
        </div>
   </section>
  )
}

export default Skills