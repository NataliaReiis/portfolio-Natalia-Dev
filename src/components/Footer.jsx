import { Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";

import { FaMailBulk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer_contact">
            <span>
              <FaMailBulk />
              <p>nataliareis208@gmail.com</p>
            </span>
            <span>
              <FaWhatsapp />
              <p> (71) 99412-0997</p>
            </span>
            <span>
              <FaLocationDot />
              <p>Salvador-BA</p>
            </span>
          </div>
          <div className="footer_icons-social">
            <FaLinkedinIn />
            <FaBehance />
            <FaGithub />
            <FaBlog />
          </div>
          <div className="footer_navbar">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/profile">
                <li>Perfil e Habilidades</li>
              </Link>
              <Link to="/projects">
                <li>Projetos</li>
              </Link>
              <Link to="/contact">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="copy">
            <p> &#169; Copywrite 2024 - Todos os direitos reservados</p>
            <p>Natália Reis - Portfolio</p>
        </div>
      </footer>
    </>
  ); 
}
