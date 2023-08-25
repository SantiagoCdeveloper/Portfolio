import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import {Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectsCards';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div>
                                <h2 className={isVisible ? "animate__animated animate__jello": ""}>Projects</h2>
                            </div>}
                        </TrackVisibility>
                                <p>Welcome to the projects section, where I showcase my solo endeavors. Every project you'll find here has been crafted by me, reflecting my individual skills and creativity. </p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <br/>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {

                                                        return(
                                                            <ProjectCard key={index} {...project}/> 
                                                        )
                                                    })
                                                }

                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {

                                                        return(
                                                            <ProjectCard key={index} {...project}/> 
                                                        )
                                                    })
                                                }

                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {

                                                        return(
                                                            <ProjectCard key={index} {...project}/> 
                                                        )
                                                    })
                                                }

                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right"src={colorSharp2}></img>
        </section>
    )
}