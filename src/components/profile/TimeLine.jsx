import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiSolidGraduation } from "react-icons/bi";

export default function Line() {
  return (
    <div className="timeline">
       <h1 className="timeline-tile">Jornada Acadêmica</h1>
       <h2>Principais certificações</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#005078" }}
          contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
          date="2024 - present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            marginTop: "10px",
          }}
          icon={<BiSolidGraduation />}
        >
          <h3 className="vertical-timeline-element-title">
            Universidade Federal da Bahia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2024-2026</h4>
          <p>Bacharelado Interdisciplinar em ciência, tecnologia e Inovação</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#005058", color: "#fff" }}
          date="2022 - present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            marginTop: "10px",
          }}
           icon={<BiSolidGraduation />}
        >
          <h3 className="vertical-timeline-element-title">Universidade Jorge Amado</h3>
          <h4 className="vertical-timeline-element-subtitle">
            2022- 2025
          </h4>
          <p>
            Bacharelado em ciência da computação
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#005058", color: "#fff" }}
          date="2023 - 2024"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            marginTop: "10px",
          }}
          /*  icon={<WorkIcon />} */
        >
          <h3 className="vertical-timeline-element-title">Front-end e ERP/RPA</h3>
          <h4 className="vertical-timeline-element-subtitle">
           Estágio
          </h4>
          <p> Ks Solutions - Consultoria em teconoliga</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#005078" }}
          date="2023"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            marginTop: "10px",
          }}
          /* icon={<WorkIcon />} */
        >
          <h3 className="vertical-timeline-element-title">Monitora de teconoliga</h3>
          <h4 className="vertical-timeline-element-subtitle">
           Unijorge
          </h4>
          <p>Monitora de logíca de programação e desenvolvimento web</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#005078" }}
          date="2023"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
            marginTop: "10px",
          }}
          /*  icon={<SchoolIcon />} */
        >
          <h3 className="vertical-timeline-element-title">
           Palestras / Oficinas de React
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <p>Palestras e oficinas de react e desenvolvimento web</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#005058", color: "#fff" }}
          date="outubro 2022"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
            marginTop: "10px",
          }}
          /* icon={<SchoolIcon />} */
        >
          <h3 className="vertical-timeline-element-title">
          Galact Problem-solver
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certificação</h4>
          <p>NASA - National Aeronautics and Space Administration</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#005058", color: "#fff" }}
          date="2002 - 2006"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
            marginTop: "10px",
          }}
          /* icon={<SchoolIcon />} */
        >
          <h3 className="vertical-timeline-element-title">
          Scrum Fundamentals
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Certificação
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
