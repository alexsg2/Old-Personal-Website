import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import MoreProjectPage from './MoreProjectsPage';
import './ContentSection.css';
import resumePDF from './images/Resume.pdf';


const profilePhoto = require('./images/profilephoto.png');
const project1Image = require('./images/profilephoto.png');
const project2Image = require('./images/profilephoto.png');
const project3Image = require('./images/profilephoto.png');
const project4Image = require('./images/profilephoto.png');
const project5Image = require('./images/profilephoto.png');
const skill1Image = require('./images/React.png');
const skill2Image = require('./images/JavaScript.png');
const skill3Image = require('./images/CSS.png');
const skill4Image = require('./images/TypeScript.png');
const skill5Image = require('./images/Java.png');
const skill6Image = require('./images/Python.png');
const skill7Image = require('./images/C.png');
const skill8Image = require('./images/C++.png');
const skill9Image = require('./images/Linux.png');
const skill10Image = require('./images/Git.png');
const skill11Image = require('./images/Figma.png');
const skill12Image = require('./images/Unity.png');


<Router>
    <Route path="/more-projects" component={MoreProjectPage} />
    {/* Other routes */}
</Router>

const WelcomeSection = () => (
    <section id="home">
        <section className="welcome-section">
            <Container>
                <Row className="justify-content-center align-items-center h-100">
                    <Col md={6}>
                        <div className="welcome-content">
                            <p className="welcome-name">
                                Hello, I'm <span className="name-highlight">Alexander Georgiev</span>
                            </p>
                            <p style={{ fontSize: '2rem' }} className="welcome-title">
                                Welcome to My <span className="title-highlight">Creative</span> Portfolio
                            </p>
                            <p className="welcome-description">
                                My personal website showcasing my projects as a Computer Science student at{' '}
                                <span className="institution-highlight">Virginia Tech</span>!
                            </p>
                            <div className="welcome-buttons">
                                <a
                                    href="https://www.linkedin.com/in/alexandersg-/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-circle"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/alexsg2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-circle"
                                >
                                    <FaGithub />
                                </a>
                                <a href="mailto:alexandersg@vt.edu" className="btn btn-primary btn-circle">
                                    <FaEnvelope />
                                </a>
                                <a href={resumePDF} download className="btn btn-primary btn-circle">
                                    <FaFileDownload />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>
);

const AboutSection = () => (
    <section id="about">
        <section className="about-section">
            <Container>
                <Row className="justify-content-center align-items-center h-100">
                    <Col md={6}>
                        <div className="about-content">
                            <h1>About Me</h1>
                            <p>Hello, I'm Alexander Georgiev.</p>
                            <p>
                                Thanks for visting my website! Here, you'll find an assortment of my personal and group projects. I've
                                dabbled in different coding languages like React.js and Java to bring these projects to life. Feel
                                free to check them out! I've learned a ton from these experiences, and they've been a major part
                                of my learning journey.
                            </p>
                            <p>These projects have imparted valuable qualities to me, such as:</p>
                            <ul>
                                <li>
                                    Working on these projects has taught me the value of teamwork. I've learned to understand others
                                    and adapt to their needs to achieve shared goals. Furthermore, these experiences have given me a
                                    deeper appreciation for diverse perspectives and the power of collective effort.
                                </li>
                                <li>
                                    As a result of these projects, I've developed strong technical skills and proficiency with various
                                    tools and languages such as OpenAI, Java, Python, and C++. They have enabled me to effectively
                                    plan and execute projects within specified timelines, fostering tremendous personal growth
                                    through the challenges I encountered.
                                </li>
                                <li>
                                    I've achieved significant growth in terms of adaptability, developing the ability to pivot and
                                    find creative solutions when faced with obstacles. I'm not deterred by the absence of an obvious
                                    solution; instead, I proactively explore alternative approaches. Whenever I encounter
                                    challenges, I'm eager to seek guidance, ask questions, and leverage various resources to overcome
                                    obstacles and find effective resolutions.
                                </li>
                            </ul>
                            <Button variant="primary" className="projects-button white-button">
                                Check out my projects
                            </Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="profile-picture">
                            <img src={profilePhoto} alt="Profile" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>
);

const ProjectSection = () => (
    <section id="projects">
        <section className="project-section">
            <Container>
                <Row className="justify-content-center">
                    <h1>My <span className="title-highlight">Project</span> Portfolio</h1>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} className="d-flex justify-content-center">
                        <ProjectCard
                            image={project1Image}
                            title="Project 1"
                            description="This is the first project. It uses React.js and Node.js."
                        />
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                        <ProjectCard
                            image={project2Image}
                            title="Project 2"
                            description="This is the second project. It uses Python and Flask."
                        />
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                        <ProjectCard
                            image={project3Image}
                            title="Project 3"
                            description="This is the third project. It uses Java and Spring Boot."
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} className="d-flex justify-content-center">
                        <ProjectCard
                            image={project4Image}
                            title="Project 4"
                            description="This is the fourth project. It uses React.js and Firebase."
                        />
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                        <ProjectCard
                            image={project5Image}
                            title="Project 5"
                            description="This is the fifth project. It uses Python and Django."
                        />
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                        <div className="more-information-card">
                            <div className="more-information-button">
                                <Button variant="primary" className="rounded-card">
                                    More Projects
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>
);

const SkillSection = () => (
    <section id="skills">
        <section className="skill-section">
            <Container>
                <Row className="justify-content-center">
                    <h1>Skills &amp; Experiences</h1>
                </Row>
                <Row>
                    <Col>
                        <div className="skills-sidebar">
                            <div className="sidebar-item">
                                <fieldset>
                                    <legend>Front End</legend>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex">
                                            <div>
                                                <img src={skill1Image} alt="Skill 1" className="rounded-photo" />
                                                <p>React</p>
                                            </div>
                                            <div>
                                                <img src={skill2Image} alt="Skill 2" className="rounded-photo" />
                                                <p>Javascript</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex">
                                            <div>
                                                <img src={skill3Image} alt="Skill 3" className="rounded-photo" />
                                                <p>CSS</p>
                                            </div>
                                            <div>
                                                <img src={skill4Image} alt="Skill 4" className="rounded-photo" />
                                                <p>TypeScript</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more images and descriptions for Front End */}
                                </fieldset>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="skills-sidebar">
                            <div className="sidebar-item">
                                <fieldset>
                                    <legend>Back End</legend>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex">
                                            <div>
                                                <img src={skill5Image} alt="Skill 5" className="rounded-photo" />
                                                <p>Java</p>
                                            </div>
                                            <div>
                                                <img src={skill6Image} alt="Skill 6" className="rounded-photo" />
                                                <p>Python</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex">
                                            <div>
                                                <img src={skill7Image} alt="Skill 7" className="rounded-photo" />
                                                <p>C</p>
                                            </div>
                                            <div>
                                                <img src={skill8Image} alt="Skill 8" className="rounded-photo" />
                                                <p>C++</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more images and descriptions for Back End */}
                                </fieldset>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="skills-sidebar">
                            <div className="sidebar-item">
                                <fieldset>
                                    <legend>Developer Tools</legend>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex">
                                            <div>
                                                <img src={skill9Image} alt="Skill 9" className="rounded-photo" />
                                                <p>Linux</p>
                                            </div>
                                            <div>
                                                <img src={skill10Image} alt="Skill 10" className="rounded-photo" />
                                                <p>Git</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex">
                                            <div>
                                                <img src={skill11Image} alt="Skill 11" className="rounded-photo" />
                                                <p>Figma</p>
                                            </div>
                                            <div>
                                                <img src={skill12Image} alt="Skill 12" className="rounded-photo" />
                                                <p>Unity</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more images and descriptions for Developer Tools */}
                                </fieldset>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col sm={12} className="d-flex justify-content-center">
                        <button className="see-more-button">See More on My Resume</button>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>
);

const ContactSection = () => (
    <section id="contact">
        <section className="contact-section">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={12}>
                        <div className="contact-content">
                            <h1>Contact Me</h1>
                            <p>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
                        </div>
                        <div className="contact-buttons">
                            <a
                                href="https://www.linkedin.com/in/alexandersg-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-rectangle btn-green"
                            >
                                LinkedIn <FaLinkedin className="btn-icon" />
                            </a>
                            <a
                                href="https://github.com/alexsg2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-rectangle btn-green"
                            >
                                GitHub <FaGithub className="btn-icon" />
                            </a>
                            <a href="mailto:alexandersg@vt.edu" className="btn btn-primary btn-rectangle btn-green">
                                Gmail <FaEnvelope className="btn-icon" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>

);

const ContentSection = () => (
    <>
        <WelcomeSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
    </>
);

export default ContentSection;