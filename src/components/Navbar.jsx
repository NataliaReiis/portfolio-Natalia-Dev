import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/image/LogoLight.png";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <Link to="/" onClick={closeNav}>
            <img src={Logo} alt="Logo natalia reis" />
          </Link>
        </div>

        <div className="toggle-container">
          <div
            className={`toggle ${navOpen ? "toggle-click" : ""}`}
            onClick={toggleNav}
          >
            {navOpen ? <MdClose onClick={closeNav} /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      <motion.div
        className={`links-container ${navOpen ? "nav-visible" : ""}`}
        ref={navRef}
      >
        <ul className="links">
          <Link to="/" onClick={closeNav}>
            <li>Home</li>
          </Link>

          <Link to="/profile" onClick={closeNav}>
            <li>Perfil e Habilidades </li>
          </Link>

          <Link to="/projects" onClick={closeNav}>
            <li>Projetos </li>
          </Link>
        </ul>
        <Link to="https://w.app/2cXTvj" target="blank">
          <button className="button-nav" onClick={closeNav}>
            <FaWhatsapp /> Entrar em contato
          </button>
        </Link>
        
      </motion.div>
    </nav>
  );
}
