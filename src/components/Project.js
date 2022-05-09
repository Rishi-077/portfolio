import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
function Project() {
  return ( 
      <div className="container-fluid" id="Project">
        <div className="project-card">
          <Card className="project-card-1">
            <a href="https://github.com/Rishi-077/Mapty-app" target="_blank">
              <Card.Img className="project-img-1  " src="images/mapty.webp" alt="github" height="270"/>
            </a>
            <h4 className="project-h4-1">MAPTY APP</h4>
          </Card>
          <Card className="project-card-1">
            <a href="https://github.com/Rishi-077/Our-Tour-Project" target="_blank">
              <Card.Img className="project-img-1 image-fluid" src="images/tour.jpg " alt="github" />
            </a>
            <h4 className="project-h4-1">OUR TOURS</h4>
          </Card>
          <Card className="project-card-1">
            <a href="https://github.com/Rishi-077/Linked-in-practice" target="_blank">
              <Card.Img className="project-img-1 image-fluid" src="images/code.jpg" alt="github" />
          </a>
          <h4 className="project-h4-1">LINKEDIN CLONE</h4>
          </Card>
        </div>
      </div>
   );
}

export default Project;