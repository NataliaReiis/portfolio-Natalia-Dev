/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/image/LogoLight.png";
import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  const [toggleClick, setToggleClick] = useState(false);

  const handleClick = () => {
    setToggleClick(!toggleClick);
  };

  return (
    <>
      <motion.nav to="/">
        <div className="brand-container">
          <div className="brand">
            <Link to="/">
              <img src={Logo} alt="Logo natalia reis" />
            </Link>
          </div>

          <div className="toggle-container">
            <div
              className={`toggle ${toggleClick ? "toggle-click" : ""}`}
              onClick={handleClick}
            >
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
          </div>
        </div>

        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
          <ul className="links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/profile">
              <li>Perfil e Habilidades</li>
            </Link>
            <Link to="/projects">
              <li>Projetos</li>
            </Link>
            {/*   <Link to="/contact">
              <li>Contato</li>
            </Link> */}
          </ul>
          <button className="button-nav"><FaWhatsapp/>Entrar em contato</button>
        </div>

       {/*  <motion.div
          className="wave"
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        ></motion.div>
        <motion.div
          className="wave"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        ></motion.div> */}
      </motion.nav>
    </>
  );
}
