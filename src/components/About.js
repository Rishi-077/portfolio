import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function About ()
{
  const styles = {
    container : {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
    }
  }
  return ( 
    <div className="container-fluid" style={styles.container} id='About'>  
      <div className="about-page">
        <img className='about-image' src="./images/4034735.jpg" alt="work" />
        <div className="about-condent">
          <h2 className="about-h2">ABOUT ME</h2>
          <p className="about-p">I'm a UI Designer and Front End Developer especially React js from Tamilnadu, India.</p>
          <button className="about-btn"><a href="https://drive.google.com/file/d/1qlRv842Io90MacVkQii87sKrq2dfrV5s/view?usp=sharing"
          target="_blank">Resume</a></button>
        </div>
      </div>
    </div>
   );
}

export default About;