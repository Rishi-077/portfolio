import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
function Project() {
  return ( 
      <div className="container-fluid" id="Project">
        <div className="project-card">
          <Card className="project-card-1">
            <a href="https://github.com/Rishi-077/Mapty-app" target="_blank">
              <Card.Img className="project-img-1  " src="https://media.istockphoto.com/photos/route-of-arial-view-futuristic-route-gps-tracking-map-navigator-with-picture-id1291379824" alt="github" height="270"/>
            </a>
            <h4 className="project-h4-1">Mapty App</h4>
          </Card>
          <Card className="project-card-1">
            <a href="https://github.com/Rishi-077/Our-Tour-Project" target="_blank">
              <Card.Img className="project-img-1 image-fluid" src="https://media.istockphoto.com/photos/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-picture-id1329031407?b=1&k=20&m=1329031407&s=170667a&w=0&h=J6qRqj9hbKtSVwIfMJhcRXf3AEyAOshph2IAbPHwNUo= " alt="github" />
            </a>
            <h4 className="project-h4-1">Our Tours</h4>
          </Card>
          <Card className="project-card-1">
            <a href="https://github.com/Rishi-077/Linked-in-practice" target="_blank">
              <Card.Img className="project-img-1 image-fluid" src="https://media.istockphoto.com/photos/closeup-on-notebook-over-wood-table-background-focus-on-wooden-blocks-picture-id989179618?b=1&k=20&m=989179618&s=170667a&w=0&h=ViRrXZF6Do_0KNrR43iJu89vVUUHr03k1jqtAH-EyII=" alt="github" />
          </a>
          <h4 className="project-h4-1">LinkedIn Clone</h4>
          </Card>
        </div>
      </div>
   );
}

export default Project;