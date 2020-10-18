import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TCS from "../../assets/img/experience/tcs-logo.jpg";
import Tilt from "react-tilt";
import "./ExperienceStyle.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_TCS} alt="TCS logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Asst.Systems Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Data & Analytics Production Support</strong>
                    <br />
                    <strong>Technology & Tools:</strong> UNIX, Netezza, Aginity Workbench,DB2, DbVisualizer, PowerBI  
                    <br />
                    <strong>Duration:</strong> July 2019 - October 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Responsibilities:</strong> Monitoring the production servers, scheduled jobs,
incident management and receiving incidents and requests from
end-users</li>
                      <li><strong>Analysis:</strong> Analysing the jobs, their performance and coming up with procedure to optimize their performance and reduce the delays and failures.
                      </li>
                      <li><strong>Commnication:</strong> Direct interaction with customers and gettting their queries and issues resolved 
                      </li>
                      <li><strong>Prepared</strong> SOPs for many jobs and tasks to get most productive outcome. </li>
                      

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;