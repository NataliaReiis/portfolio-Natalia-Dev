import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiBehance,
  SiBloglovin,
} from "react-icons/si";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="infos-home-container">
          <h1>Bem-vinda(o) ao meu universo criativo e tecnológico! </h1>
          <span className="data-home">
            <p>Ui/Ux Design</p>
            <p>Cientista da Computação</p>
          </span>
          <button>Ver projetos</button>
          <span className="icons-home">
            <Link to="https://github.com/NataliaReiis" target="blank">
              <SiGithub />{" "}
            </Link>
            <Link to="https://www.linkedin.com/in/nat%C3%A1lia-reis-965763165/">
              <SiLinkedin />
            </Link>
            <Link to="">
              <SiInstagram />
            </Link>
            <Link to="https://www.behance.net/nataliareiis">
              <SiBehance />
            </Link>
            <Link to="">
              <SiBloglovin />
            </Link>
          </span>
        </div>
        <div className="image-home-container"></div>
      </div>
    </>
  );
}
