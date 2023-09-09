import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "./gg.png";
import emotion from "../../Assets/5.2.webp";
import editor from "./hh.png";
import chatify from "../../Assets/1.png"
import suicide from "../../Assets/BKS.png";
import bitsOfCode from "../../Assets/2.png";


function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">MY PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=<center>COLLEGE WEBSITE</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>HTML</li> 
                 <li>CSS-&-JS</li>
                  </ul>
                  </center>}
                  ghLink="https://github.com/maurya2201/COLLEGE-WEBSITE"
                  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=<center>TRAVEL WEBSITE</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>HTML</li> 
                 <li>CSS-&-JS</li>
                  </ul>
                  </center>}
                 ghLink="https://github.com/maurya2201/TRAVEL-WEBSITE"
                
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=<center>BLOG-APP</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>REACT</li> 
                 <li>NODE-&-MONGODB</li> 
                  </ul>
                  </center>}
                  ghLink="https://github.com/maurya2201/BLOG-APP.git"
                 
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=<center>BOOTCAMP BACKEND API</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                <li>NODE-&-MONGODB</li> 
                  </ul>
                  </center>}
              ghLink="https://github.com/maurya2201/DEVCAMPER-BOOTCAMP-BACKEND-API.git"
             
            />
            
          </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=<center>CHAT APPLICATION</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>REACT</li> 
                 <li>FIREBASE</li> 
                  </ul>
                  </center>}
              ghLink="https://github.com/maurya2201/CHAT-APPLICATION"
              
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={suicide}
            isBlog={false}
            title=<center>BOOKHUB</center>
            description={<center>------------TECHNOLOGIES USED---------------
            <ul>
             <li>REACT</li> 
             <li>NODE-&-MONGODB</li> 
              </ul>
              </center>}
            ghLink="https://github.com/maurya2201/BOOKHUB"
            
          />
        </Col> 
        </Row>
      </Container>
     
    </Container>

    
  

  );
}

export default Projects;
