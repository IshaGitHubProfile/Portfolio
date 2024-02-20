import GithubRepo from "../../assets/images/project-source.png";
import {projectsData} from "../../data/projectsData";

const Projects = () => {
    return (
        <section className="portfolio-grid">
            {projectsData.map((project)=>(
                <section key={project.id} className="project">
                    <img
                      src={project.img}
                      alt=""
                      className="project-img"
                      aria-hidden="true"
                    ></img>
                    <section className="project-description">
                        <p className="white-text p-tag">{project.description}</p>
                        <section className="project-meta-stack">
                            {project.stack.map((stackName,index) => (
                                <p key={index}>{stackName}</p>
                            ))}
                        </section>
                        <section className="project-links">
                            <a href={project.source} target="_blank" rel="nonreferrer">
                                <img src={GithubRepo} alt="link"></img>
                            </a>
                        </section>
                    </section>
                </section>
            ))}
        </section>
    )
};

export default Projects;