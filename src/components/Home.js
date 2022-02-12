import React from 'react';
import { AiFillInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import '../App.css'
function Home ()
{
  
  return ( 
    <>
      <div className="home">
        <div className="home-div">
        <h1 className="home-h1">Hello, I'm <span className="home-name">Rishi.</span></h1>
          <p className="home-p">I am a <span className="home-span">React Developer</span></p>
          <ul className="home-ul">
            <li><a href="https://github.com/Rishi-077"><i className='icon'><AiOutlineGithub /></i></a></li>
            <li><a href="https://instagram.com/rishi_deiv_07"><i className='icon'><AiFillInstagram /></i></a></li>
            <li><a href="https://www.linkedin.com/in/rishi-kesan-2b23ba228/"><i className='icon'><AiFillLinkedin /></i></a></li>
          </ul>
        </div>
        <img className="home-img" src='./images/photo Blue 2.jpg' alt="rishi"/>
      </div>
    </>
   );
}

export default Home;