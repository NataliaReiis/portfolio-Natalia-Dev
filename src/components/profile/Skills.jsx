import { PieChart } from "@mui/x-charts";

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiLinuxcontainers,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="skills">
      <div className="languages">
        <button style={{ color: "#DD4B25" }}>
          HTML <SiHtml5 />
        </button>
        <button style={{ color: "#254BDD" }}>
          CSS <SiCss3 />
        </button>
        <button style={{ color: "#C66394" }}>
          Sass <SiSass />
        </button>
        <button style={{ color: "#EFD81D" }}>
          Javascript <SiJavascript />
        </button>
        <button style={{ color: "#5ED3F3" }}>
          ReactJs <SiReact />
        </button>
        <button style={{ color: "#8BBF3D" }}>
          NodeJs <SiNodedotjs />
        </button>
        <button style={{ color: "#DD8800" }}>
          MySql <SiMysql />
        </button>
        <button style={{ color: "#090909" }}>
          Linux <SiLinuxcontainers />
        </button>
        <button style={{ color: "#9D56F7" }}>
          Figma <SiFigma />
        </button>
        <button style={{ color: "#179F92" }}>
          Photoshop
          <SiAdobephotoshop />
        </button>
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
