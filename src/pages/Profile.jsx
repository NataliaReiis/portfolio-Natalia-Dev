import Skills from "../components/profile/Skills";
import TimeLine from "../components/profile/Line";

import { FiCode } from "react-icons/fi";
import { BsBrush } from "react-icons/bs";
import { MdDownload } from "react-icons/md";


import code from "../assets/icon/code.svg";
import design from "../assets/icon/design.svg";

export default function Profile() {
  return (
    <div className="profile">
      <h1 className="profile-titles">Jornada Acadêmica</h1>
      <TimeLine />
      <h1 className="profile-titles">Skills</h1>
      <Skills />
      <div className="about-infos-container">
        <div className="about-text">
          <h1>Um pouco sobre mim...</h1>
          <p>
            Me chamo Natália, sou estudante de Ciência da Computação no 5º
            semestre. Estou super empolgada com a jornada de transformar
            conceitos em experiências digitais. Meu caminho começou no design e
            front-end, mas agora estou mergulhando também na estrutura de dados
            e lógica de programação. Tenho um olhar atento para construir
            sistemas eficientes, combinando meu entendimento de estrutura de
            dados e lógica de programação com a habilidade de criar interfaces
            intuitivas. Meu site é mais do que linhas de código; é uma mistura
            equilibrada entre funcionalidade e design.
          </p>
          <button><MdDownload/>Donwload do CV</button>
        </div>
        <div className="image-about"></div>
      </div>

      <div className="code-design-container">
        <div className="code-design-content">
          <div className="code-content">
            <img src={code} alt="" />
            <h1>
              Design
              <FiCode />
            </h1>
            <p>
              Meu portfólio é uma jornada visual através do mundo do design,
              onde cada projeto conta uma história única. Sou um designer
              apaixonado, dedicado a criar experiências envolventes e
              esteticamente atraentes. Cada elemento do meu trabalho é
              meticulosamente pensado, desde a paleta de cores até a tipografia
              escolhida. Explore meu portfólio e descubra como transformo ideias
              em designs que cativam e inspiram
            </p>
          </div>

          <div className="design-content">
            <h1>
              Developer
              <BsBrush />
            </h1>
            <p>
              Um lugar onde a estética encontra a funcionalidade. Como
              desenvolvedor front-end, minha paixão é dar vida às visões dos
              designers. Cada linha de código é uma oportunidade de criar uma
              experiência interativa e responsiva que eleva a usabilidade e a
              acessibilidade. Navegue pelos projetos e descubra como transformo
              conceitos em interfaces dinâmicas e intuitivas.
            </p>

            <img src={design} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
