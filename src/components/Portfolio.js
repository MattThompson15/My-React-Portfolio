import React from 'react';
import Project from './Project';

const Portfolio = () => {
    const projects = [
        {
            name: 'Project 1',
            description: 'This is my first project',
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com',
            deployed: 'https://github.com'
        },
        {
            name: 'Project 2',
            description: 'This is my second project',
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com',
            deployed: 'https://github.com'
        },
        {
            name: 'Project 3',
            description: 'This is my third project',
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com',
            deployed: 'https://github.com'
        },
        {
            name: 'Project 4',
            description: 'This is my fourth project',
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com',
            deployed: 'https://github.com'
        }
    ];

    return (  
        <section id="portfolio">
            <h1>Portfolio</h1>
            <div className="projects-container">
                {projects.map(project => (
                    <Project
                        key={project.title}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        github={project.github}
                        deployed={project.deployed}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
