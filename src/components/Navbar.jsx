/* eslint-disable react/prop-types */

import {motion} from "framer-motion"
import { Link } from "react-router-dom";

import Logo from "../assets/image/LogoLight.png"
export default function Navbar() {
  return (
    <>
      <motion.header 
        to="/"
         /* initial={{opacity: 0, y:120}}
          animate={{opacity:1, y: 0}}
          transition={{
           duration:2,
           ease: 'easeOut'
          }} */
      >
        <nav>
          <Link to="/">
          <img src={Logo} alt="Logo natalia reis" />
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/profile">
            <li >Perfil e Habilidades</li>
          </Link>
          <Link to="/projects">
            <li>Projetos</li>
          </Link>
          <Link to="/contact">
            <li>Contato</li>
          </Link>
        </ul>
        <button className="button-nav">Entrar em contato</button>
        </nav>
        
        <motion.div 
        initial={{ x: '0%'}}
        animate={{x: '100%'}}
        transition={{
          duration: 60,
          ease: 'linear',
          repeat: Infinity
        }}
        className="wave">
          
          </motion.div>
          <motion.div 
        initial={{ x: '-100%'}}
        animate={{x: '0%'}}
        transition={{
          duration: 60,
          ease: 'linear',
          repeat: Infinity
        }}
        className="wave">
          </motion.div>
      </motion.header>
       
    </>
  );
}
