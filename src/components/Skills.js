import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
       <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box' align="center">
                            <h2>
                                Skills
                            </h2> 
                            <p>Over the past few years since 2020, I've acquired a diverse range of skills across significant programming languages and tools. I've delved into languages like Python, PHP, and JavaScript, while also gaining proficiency in frameworks such as React, Laravel, and Pygame. My experience extends to MySQL, where I possess a solid grasp of database management. Additionally, I'm well-versed in the MERN stack, which encompasses MongoDB, Express.js, React, and Node.js. These experiences have not only broadened my skill set but also fueled my passion for creating dynamic and innovative web applications</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={meter1} alt="image"/>
                                    <h5>Web Developent</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="image"/>
                                    <h5>Software Developent</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="image"/>
                                    <h5>Computer Technician</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="image"/>
                                    <h5>Work with a team</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}/>
       </section> 
    )
}

