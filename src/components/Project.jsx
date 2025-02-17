const Project = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <a href={projectUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>
        </div>
    );
};


export default Project;