import React from 'react';

const Project = ({ title, imageUrl, liveLink, repoLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} />
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
};