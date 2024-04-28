import TimeLine from "../components/profile/TimeLine";
import About from "../components/profile/About";

import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import js from "../assets/image/js.png";
import scss from "../assets/image/scss.png";
import react from "../assets/image/react.png";
import nodejs from "../assets/image/node.png";
import sql from "../assets/image/sql.png";
import application_programming_interface from "../assets/image/api.png";
import adobe_photoshop from "../assets/image/photoshop.png";
import fig from "../assets/image/figma.png";
import wp from "../assets/image/wordpress.png";

export default function Profile() {
  const otherServices = [
    {
      name: "01. Desenvolvimento",
      item1: "Web sites",
      item2: "Webflows",
      item3: "App Android",
      item4: "Implantação ERP",
    },
    {
      name: "02. Design Visual",
      item1: "Ui/Ux Design",
      item2: "Design Graphic",
      item3: "Icon Design",
      item4: "Mockup Design",
    },
  ];

  return (
    <>
      <About />
      <TimeLine />

      <div className="others-services">
        {otherServices.map((service, index) => (
          <div key={index} className="container-services">
            <h1>{service.name}</h1>
            <ul>
              {" "}
              {/* CORRIGIR ESSE TRECHO */}
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
        <img src={js} alt="" />
        <img src={scss} alt="" />
        <img src={react} alt="" />
        <img src="https://i.ibb.co/LYWJ3s1/node.webp" alt="" />
        <img src="https://i.ibb.co/y4CztYW/sql.webp" alt="" />
        <img src="https://i.ibb.co/5F6gmmQ/api.webp" alt="" />
        <img src="https://i.ibb.co/ZH1Gy7g/photoshop.png" alt="" />
        <img src="https://i.ibb.co/6mW7YZ7/figma.png" alt="" />
        <img src="https://i.ibb.co/HhKG57x/wordpress.png" alt="" />
      </div>
    </>
  );
}
