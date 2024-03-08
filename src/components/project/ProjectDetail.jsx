import { useParams } from "react-router-dom";
import data from "../../services/dataProjects";

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
            <button onClick={redirectToPage}>Voltar</button>
          </span>
          <span className="title">
            <h1>Projeto: {project.name}</h1>{" "}
          </span>
        </div>
        <div className="content_projects-details">
          <div className="content_media">midia</div>
          <div className="content_projects-description">
            descrição
            <span className="content_details-tecnologys">sass - html</span>
          </div>
        </div>
      </div>
    </>
  );
}
