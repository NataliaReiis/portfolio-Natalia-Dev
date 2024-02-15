import { PieChart } from "@mui/x-charts";

import { SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiNodedotjs, SiMysql, SiLinuxcontainers, SiFigma, SiAdobephotoshop } from "react-icons/si";


export default function Skills() {
  return ( 
        <div className="skills">
          <div className="languages">
            <button>HTML <SiHtml5/></button>
            <button>CSS <SiCss3/></button>
            <button>Sass <SiSass/></button>
            <button>Javascript < SiJavascript/></button>
            <button>ReactJs <SiReact/></button>
            <button>NodeJs <SiNodedotjs/></button>
            <button>MySql <SiMysql/></button>
            <button>Linux <SiLinuxcontainers/></button>
            <button>Figma <SiFigma/></button>
            <button>Photoshop<SiAdobephotoshop/></button>
          </div>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 45, label: "Front-end" },
                  { id: 1, value: 35, label: "UI/UX Design" },
                  { id: 2, value: 20, label: "Back-end" },
                ],
                innerRadius: 34,
                paddingAngle: 10,
                cornerRadius: 4,
                endAngle: 400,
              },
            ]}
            width={500}
            height={250}
          />

      
        </div>
      
  );
}
