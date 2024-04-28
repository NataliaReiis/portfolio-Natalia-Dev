import { useParams, Link } from "react-router-dom";
import data from "../../services/dataProjects";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = data.find((project) => project.id === parseInt(id));

  const redirectToPage = () => {
    window.history.back();
  };

  return (
    <>
      <div className="container_projectsDetail">
        <div className="container_title-button">
          <span className="button_goBack">
            <button onClick={redirectToPage}>
              <FaArrowLeft style={{ marginRight: "10px" }} /> Voltar
            </button>
          </span>
          <span className="title-project">
            <h2>Projeto: {project.name}</h2>
          </span>
        </div>
        <div className="content_projects-details">
          <div className="content_media">
            <img src={project.bigImage} alt={project.name} />
          </div>
          <div className="content_projects-description">
            {project.description}
            <span className="goProject">
              <Link to={project.linkSite} target="blank">
                <button>Ver Site</button>
              </Link>
              <Link to={project.linkCode} target="blank">
                <button>Ver codigo</button>
              </Link>
            </span>
            <span className="content_details-tecnologys">
              {project.languages}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
