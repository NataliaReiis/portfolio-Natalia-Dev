import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export default function TagsInfos() {
  const infos = [
    {
      image: "src/assets/image/front-end.png",
      name: "Dev Front-end",
      description:
        "Criação de interfaces cativantes e funcionais que elevam a experiência do usuário a novos níveis.",
    },
    {
      image: "src/assets/image/design.png",
      name: "Ui / Ux Design",
      description:
        "Projeto experiências digitais que combinam estética e usabilidade, envolvendo os usuários em jornadas intuitivas e memoráveis",
    },
    {
      image: "src/assets/image/brain.png",
      name: "Cientista da computação",
      description:
        "Cientista da computação em formação e pesquisadora na area de programação para biotecnologia",
    },
  ];
  return (
    <div className="tagsInfos">
      <span className="tags">
        <div>
          <FaCode style={{ marginRight: "5px"}} />
          <p>Desenvolvedora</p>
        </div>
        <div>
          <MdOutlineDesignServices style={{ marginRight: "5px" }} />
          <p>UX Design</p>
        </div>
        <div>
          <PiStudentBold style={{ marginRight: "5px" }} />
          <p>Pesquisadora na Área de Biotecnologia</p>
        </div>
      </span>

      <div className="infos">
        {infos.map((info, index) => (
          <span key={index}>
            <img src={info.image} alt="" />
            <h1>{info.name}</h1>
            <p>{info.description}</p>
          </span>
        ))}
      </div>
    </div>
  );
}
