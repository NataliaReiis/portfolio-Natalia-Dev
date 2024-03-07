import { useParams } from "react-router-dom";

export default function ProjectDetail() {

  const { id } = useParams();

  const redirectToPage = () => {
    window.history.back();
  }

  return (
    <div>
      <button onClick={redirectToPage}>Voltar</button>
      <h1>Detalhes do projeto</h1>
      <p>Id do projeto: {id}</p>
    </div>
  );
}
