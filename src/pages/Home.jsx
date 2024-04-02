import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiBehance,
  SiBloglovin,
} from "react-icons/si";
import { Link } from "react-router-dom";

import ImageHome from "../assets/image/image-home (2).png";
import TagsInfos from "../components/home/TagsInfos";
import Navbar from "../components/Navbar"
import Projects from "../components/project/Projects"

import LogoLight from "../assets/image/LogoLight.png"

export default function Home() {
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
    {
      icon: <SiBloglovin />,
      link: "https://www.google.com/",
    },
  ];
  return (
    <>
    <Navbar logo={LogoLight} />
      <div className="home-container">
        <div className="infos-home-container">
          <span className="pointes">...</span>
          <h1>Olá, me chamo Natália </h1>
          <h2>Bem-vinda(o) ao meu universo criativo e tecnológico!</h2>
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
        <div className="image-home-container">
          <img src={ImageHome} alt="" />
        </div>
       
      </div>
      <TagsInfos />
      <Projects />
    </>
  );
}
