import {
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiBehance,
  } from "react-icons/si";
import { Link } from "react-router-dom";
import {motion, /* useAnimation */} from "framer-motion"
import ImageHome from "../../assets/image/imageHome.png";


export default function Banner(){
    const icons = [
        {
          icon: <SiGithub />,
          link: "https://github.com/NataliaReiis",
        },
        {
          icon: <SiLinkedin />,
          link: "https://www.linkedin.com/in/nat%C3%A1lia-reis-965763165/",
        },
        {
          icon: <SiInstagram />,
          link: "https://www.google.com/",
        },
        {
          icon: <SiBehance />,
          link: "https://www.behance.net/nataliareiis",
        },
      ];
    
    return (
      <div className="home-container">
           <div className="infos-home-container">
          <span className="pointes">
            <motion.div
              initial={{x: '-0%', y: '-15%'}}
              animate={{x: '50%', y: '0%'}}
              transition={{
                duration: 1,
                animate: "ease",    
                  
              }}
            >.</motion.div>
            <motion.div
               initial={{x: '-0%', y: '-15%'}}
               animate={{x: '50%', y: '0%'}}
               transition={{
                duration: 1,
                animate: "ease"
                 
                
                }}
            >.</motion.div>
            <motion.div
               initial={{x: '-0%', y: '-15%'}}
               animate={{x: '50%', y: '0%'}}
               transition={{
                duration: 1,
                animate: "ease"
              
                 
                }}
            >.</motion.div>
          </span>
          <motion.span
           initial={{opacity: 0, y: 150}}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{
            animate: "ease",
            duration: "1",
           }}
            /* initial={{opacity: 0, y:120}}
            animate={{opacity:1, y: 0}}
            transition={{
              duration:2,
              ease: 'easeOut'
            }} */
          >
            <h1>Olá, me chamo Natália </h1>
            <h2>Bem-vinda(o) ao meu universo criativo e tecnológico!</h2>
          </motion.span>
          <motion.div 
          className="icons-home"
          initial={{opacity: 1, y: 50}}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{
            animate: "ease",
            duration: "1",
            ease: 'easeOut'
            }}
         /*  initial={{opacity: 0, x: -120}}
          animate={{opacity:1, x: 0}}
          transition={{
            duration:2,
            ease:'linear'
          }} */
          >
            {icons.map((icon, index) => (
              <span key={index}>
                <Link to={icon.link} target="_blank">
                  {icon.icon}
                </Link>
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div 
         className="image-home-container"
          initial={{opacity: 1, x: 150}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
           animate: "ease",
           duration: "1",
           ease: 'easeOut'
          }}
        >
          <img src={ImageHome} alt="" />
        </motion.div>
       
      </div>

    )
}