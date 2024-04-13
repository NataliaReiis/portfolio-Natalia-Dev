
import TimeLine from "../components/profile/TimeLine";
import Navbar from "../components/Navbar"
import About from  "../components/profile/About"

import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import javascript from "../assets/image/Javascript.png";
import sass from "../assets/image/Sass.png";
import react from "../assets/image/react.png";
import node from "../assets/image/Node.png"
import sql from "../assets/image/SQL.png"
import api from "../assets/image/API.png";
import photoshop from "../assets/image/Photoshop.png";
import figma from "../assets/image/Figma.png";
import wordpress from "../assets/image/WordPress.png";


export default function Profile() {
  const otherServices = [
    {
      name: '01. Desenvolvimento',
      item1: 'Web sites',
      item2: 'Webflows',
      item3: 'App Android',
      item4: 'Implantação ERP',
    },
    {
      name: '02. Design Visual',
      item1: 'Ui/Ux Design',
      item2: 'Design Graphic',
      item3: 'Icon Design',
      item4: 'Mockup Design',
    }
  ]

  return (
  <> 
   <Navbar />
   <About />
   <TimeLine />


  <div className="others-services">
  {otherServices.map((service, index) => (
      <div key={index} className="container-services">
        <h1>{service.name}</h1>
           <ul> {/* CORRIGIR ESSE TRECHO */}
            <li>{service.item1}</li>
            <li>{service.item2}</li>
            <li>{service.item3}</li>
            <li>{service.item4}</li>
          </ul> 
      </div>
      ))}
  </div>
  <div className="images-languages">
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={javascript} alt="" />
      <img src={sass} alt="" />
      <img src={react} alt="" />
      <img src={node} alt="" />
      <img src={sql} alt="" />
      <img src={api} alt="" />
      <img src={photoshop} alt="" />
      <img src={figma} alt="" />
      <img src={wordpress} alt="" />
  </div>
  </>
  );
}
