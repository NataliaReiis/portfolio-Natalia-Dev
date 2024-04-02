/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <header to="/">
        <Link>
          <img src={props.logo} alt="Logo natalia reis" />
        </Link>
        <ul>
          <Link to="/">
            <li style={{color:props.color}}>Home</li>
          </Link>
          <Link to="/profile">
            <li style={{color:props.color}}>Perfil e Habilidades</li>
          </Link>
          <Link to="/projects">
            <li style={{color:props.color}}>Projetos</li>
          </Link>
          <Link to="/contact">
            <li style={{color:props.color}}>Contato</li>
          </Link>
        </ul>
        <button className="button-nav">Entrar em contato</button>
      </header>
    </>
  );
}
