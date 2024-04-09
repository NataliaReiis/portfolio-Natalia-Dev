
import TimeLine from "../components/profile/TimeLine";
import Navbar from "../components/Navbar"
import About from  "../components/profile/About"

export default function Profile() {
  const othersServices = [
    {
      name: 'Desenvolvimento',
      item1: 'Web sites',
      item2: 'Webflows',
      item3: 'App Android',
      item4: 'Implantação ERP',
    },
    {
      name: 'Design Visual',
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
      <div className="design-visual">
        <h1>{othersServices.name}</h1>
          <ul> {/* CORRIGIR ESSE TRECHO */}
            <li>{othersServices.item1}</li>
            <li>{othersServices.item2}</li>
            <li>{othersServices.item3}</li>
            <li>{othersServices.item4}</li>
          </ul>
      </div>
      <div className="development">
        <h1></h1>
          <ul>
            <li></li>
          </ul>
      </div>


  </div>
  </>
  );
}
