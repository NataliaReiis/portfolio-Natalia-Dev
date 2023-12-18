import { Link } from "react-router-dom"

import Logo from '../assets/icon/WLogo.svg'

 export default function Navbar(){
    return(
        <>
        <header>
            <img src={Logo} alt="" />
             <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/profile"><li>Perfil</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
             </nav>
             <button>Blog</button>
        </header>
           
        </>
    )
 }