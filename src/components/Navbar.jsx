import { Link } from "react-router-dom";

import Logo from "../assets/icon/WLogo.svg";

export default function Navbar() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo natalia reis" />
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
        <button className="button-blog" >Blog</button>
      </header>
    </>
  );
}
