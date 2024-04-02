import { Link } from "react-router-dom";

import Logo from "../assets/image/LogoLight.png";

export default function Navbar() {
  return (
    <>
      <header to="/">
        <Link>
          <img src={Logo} alt="Logo natalia reis" />
        </Link>
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
        <button className="button-nav">Entrar em contato</button>
      </header>
    </>
  );
}
