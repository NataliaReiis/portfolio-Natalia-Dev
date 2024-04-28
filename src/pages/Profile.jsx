import TimeLine from "../components/profile/TimeLine";
import About from "../components/profile/About";

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
        <img src="https://i.ibb.co/54FvBTw/html.webp" alt="" />
        <img src="https://i.ibb.co/JcZ9sYG/css.webp" alt="" />
        <img src="https://i.ibb.co/0BZ5JKH/js.webp" alt="" />
        <img src="https://i.ibb.co/fHS75Qj/scss.webp" alt="" />
        <img src="https://i.ibb.co/28Nj3nz/react.png" alt="" />
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
