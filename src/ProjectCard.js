import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description }) => {
    const [showButton, setShowButton] = useState(false);

    const handleMouseEnter = () => {
        setShowButton(true);
    };

    const handleMouseLeave = () => {
        setShowButton(false);
    };

    return (
        <Card
            className="project-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="project-image">
                <div className="image-container">
                    <img src={image} alt={title} className={`rounded-image ${showButton ? 'blur' : ''}`} />
                    {showButton && (
                        <a
                            href="https://github.com/your-github-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            <FaGithub className="github-icon" />
                        </a>
                    )}
                </div>
            </div>
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text className="text-center">{description}</Card.Text>
                <Button variant="primary" className="centered-button">
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
