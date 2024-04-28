import { Link } from "react-router-dom";

import Logo from "../assets/image/LogoLight.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { AiTwotoneMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="logo">
          <Link>
            <img src={Logo} alt="" />
          </Link>
          <p>
            Serviço personalizado e programação exclusiva. Experiência única e
            sob medida.
          </p>
        </div>
        <div className="menu-footer">
          <h1>
            Menu
          </h1>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="profile">
            <p>Perfil e Habilidades</p>
          </Link>
          <Link to="projects">
            <p>Projetos</p>
          </Link>
        </div>
        <div className="more-footer">
          <h1>Contato</h1>
          <div className="contact-footer">
            <span>
              <FaLocationDot style={{color: "rgb(182, 12, 2)"}}/>
              <p>Salvador-Ba, Brasil</p>
            </span>
            <span>
              < AiTwotoneMail   style={{color: "rgb(182, 12, 2)"}}/>
              <p>nataliareis208@gmail.com</p>
            </span>
            <span>
              <FaWhatsapp  style={{color: "green"}}/>
              (71) 99412-0997
            </span>
          </div>
          <div className="others-contact-footer">
            <Link to="https://www.linkedin.com/in/nat%C3%A1lia-reis-965763165/">
              <FaLinkedinIn />
            </Link>
            <Link to="https://github.com/NataliaReiis">
              <FaGithub/>
            </Link>
            <Link to="https://www.behance.net/nataliareiis">
              <FaBehance/>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
