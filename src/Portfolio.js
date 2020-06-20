import React from "react";
import ProjectCard from "./ProjectCard";
import "./portfolio.css";
import logoPfizer from "./project-pfizer.jpg";
import logoBi from "./project-bi.jpg";
import logoCotripper from "./project-cotripper.jpg";
import logoOptimize from "./project-optimize.jpg";
import logoDc from "./project-dc.jpg";
import logoGhostpay from "./project-ghostpay.jpg";

const projectList = [
  {
    label: "Pfizer Pharmaceuticals | [Confidential]",
    description:
      "I develop branded and unbranded digital experiences for people with rheumatoird arthritis at Wunderman Thompson.",
    image: logoPfizer,
    contact: true,
    url: "",
  },
  {
    label: "BI Pharmaceuticals | [Confidential]",
    description:
      "I develop digital experiences for people with idiopathic pulmonary fibrosis (lung disease) at Wunderman Thompson",
    image: logoBi,
    contact: true,
    url: "",
  },
  {
    label: "Cotripper | Responsive Design",
    description:
      "An experience-based travel & community platform for single-mom families.",
    image: logoCotripper,
    contact: false,
    url:
      "https://medium.com/@yhunsicker/ux-designer-for-cotripper-an-experience-based-travel-community-platform-for-single-mom-families-32e005ef85b0",
  },
  {
    label: "optiMize | Website Design",
    description:
      "Built optiPortal - a community platform where users can connect with fellows, organizers, mentors, and alumni.",
    image: logoOptimize,
    contact: false,
    url: "https://medium.com/@yhunsicker/ux-design-for-optimize-bb536549484c",
  },
  {
    label: "D.C. Government | Service Design",
    description:
      "Internal agency service design to improve service and satisfaction for the city. ",
    image: logoDc,
    contact: false,
    url:
      "https://medium.com/@yhunsicker/service-design-project-where-are-the-gaps-throughout-the-district-of-columbias-internal-agencies-d941a75c41fb",
  },
  {
    label: "Ghost Pay | Application",
    description: "Cryptocurrency application for everyday purchases.",
    image: logoGhostpay,
    contact: false,
    url: "https://medium.com/@yhunsicker/crypto-app-made-easy-d7462e1068f7",
  },
];
function Portfolio(props) {
  const projects = projectList.map((project, index) => (
    <ProjectCard
      label={project.label}
      description={project.description}
      image={project.image}
      contact={project.contact}
      key={index}
      url={project.url}
    />
  ));

  return (
    <div>
      <div className="portfolio-title">User Experience Design</div>
      <div className="portfolio-projects">{projects}</div>
    </div>
  );
}

export default Portfolio;
