import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

import {  motion } from "framer-motion"

import frontEnd from "../../assets/image/front-end.png"
import UxDesign from "../../assets/image/design.png"
import cientist from "../../assets/image/brain.png"



export default function TagsInfos() {
  const infos = [
    {
      image: frontEnd,
      name: "Dev Front-end",
      description:
        "Criação de interfaces cativantes e funcionais que elevam a experiência do usuário a novos níveis.",
    },
    {
      image: UxDesign,
      name: "Ui / Ux Design",
      description:
        "Projeto experiências digitais que combinam estética e usabilidade, envolvendo os usuários em jornadas intuitivas e memoráveis",
    },
    {
      image: cientist,
      name: "Cientista da computação",
      description:
        "Cientista da computação em formação e pesquisadora na area de programação para biotecnologia",
    },
  ];
  return (
    <motion.div className="tagsInfos"
     initial={{opacity: 0}}
     whileInView={{ opacity: 1}}
    >
      <motion.span 
       className="tags"
       initial={{opacity: 0, x: 150}}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
        animate: "ease",
        duration: "1",
       }}
      >
        <div className="content-tag">
          <FaCode  />
          <p>Desenvolvedora</p>
        </div>
        <div className="content-tag">
          <MdOutlineDesignServices  />
          <p>UX Design</p>
        </div>
        <div className="content-tag">
          <PiStudentBold />
          <p>Ciência e Tecnologia</p>
        </div>
      </motion.span>

      <motion.div
       className="infos"
       initial={{opacity: 0, y: 150}}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
        animate: "ease",
        duration: "1",
       }}
       >
        {infos.map((info, index) => (
          <span key={index}>
            <img src={info.image} alt="" />
            <h1>{info.name}</h1>
            <p>{info.description}</p>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
