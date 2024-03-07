import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();


  return (
    <div>
  
      <h1>Detalhes do projeto</h1>
      <p>Id do projeto: {id}</p>
    </div>
  );
}
