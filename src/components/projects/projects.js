import React, { useState } from "react";
import "./projects.css";

const Projects = ({ projectsData }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const sortedprojectsData = [...projectsData].sort(
    (b, a) => b.sequence - a.sequence
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleFilter = (tech) => {
    setFilter(tech);
  };

  const filteredProjects = sortedprojectsData.filter((project) =>
    filter === "All"
      ? true
      : project.techStack.map((tech) => tech.trim()).includes(filter)
  );

  return (
    <>
      <div className="button-container">
        <button className="my-button" onClick={() => handleFilter("All")}>
          All
        </button>
        <button className="my-button" onClick={() => handleFilter("Reactjs")}>
          React
        </button>
        <button className="my-button" onClick={() => handleFilter("Nextjs")}>
          Next
        </button>
        <button className="my-button" onClick={() => handleFilter("Mern")}>
          Mern
        </button>
        <button className="my-button" onClick={() => handleFilter("CSS")}>
          CSS
        </button>
        <button
          className="my-button"
          onClick={() => handleFilter("TailwindCSS")}
        >
          TailwindCSS
        </button>
      </div>

      <div className="projects-container">
        {filteredProjects.map(
          (project, index) =>
            project.enabled && (
              <div
                key={index}
                className="project-card"
                onClick={() => openModal(project)}
              >
                <img src={project.image.url} alt={project.title} />
                <h2>{project.title}</h2>
                {/*<p>{project.description}</p>*/}
              </div>
            )
        )}
        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                ×
              </span>
              <h2>{selectedProject.title}</h2>
              <img
                className="modal-img"
                src={selectedProject.image.url}
                alt={selectedProject.title}
              />
              <p>{selectedProject.description}</p>
              <p>Tech Stack: {selectedProject.techStack.join(", ")}</p>
              <p>
                Live URL:
                <a href={selectedProject.liveurl}>{selectedProject.liveurl}</a>
              </p>
              <p>
                GitHub URL:
                <a href={selectedProject.githuburl}>
                  {selectedProject.githuburl}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
