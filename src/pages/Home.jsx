import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiBehance,
  SiBloglovin,
} from "react-icons/si";
import { Link } from "react-router-dom";

export default function Home() {

  const icons = [
    {
     
      icon: <SiGithub />,
      link: "https://github.com/NataliaReiis",
    },
    {
      icon:   <SiLinkedin />,
      link: "https://www.linkedin.com/in/nat%C3%A1lia-reis-965763165/",
    },
    {
      icon:    <SiInstagram />,
      link: "https://www.google.com/",
    },
    {
      icon:     <SiBehance />,
      link: "https://www.behance.net/nataliareiis",
    },
    {
      icon:    <SiBloglovin />,
      link: "https://www.google.com/",
    },

  ]
  return (
    <>
      <div className="home-container">
        <div className="infos-home-container">
          <span>...</span>
          <h1>Bem-vinda(o) ao meu universo criativo e tecnológico! </h1>

          <div className="icons-home">
            {icons.map((icon, index) => (
              <span key={index}>
              <Link to={icon.link} target="_blank">
                {icon.icon}
              </Link>
            </span>
            ))}
            
          </div>
        </div>
        <div className="image-home-container"></div>
      </div>
    </>
  );
}
