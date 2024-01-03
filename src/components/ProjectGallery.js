/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import Project from '../components/project';

const ProjectGallery = forwardRef((props, ref) => {
  const projects = [
    {
      title1: "Magister",
      title2: "Solutions",
      src: "project-magister.png"
    },
    {
      title1: "Kyocera",
      title2: "Technologies",
      src: "project-kyocera.png"
    },
    {
      title1: "Roihu",
      title2: "Law",
      src: "project-roihu.png"
    },
    {
      title1: "Tammermatic",
      title2: "",
      src: "project-tammermatic.png"
    },
    {
      title1: "Kontukoti",
      title2: "",
      src: "project-kontu.png"
    },
    {
      title1: "Sleipner",
      title2: "",
      src: "project-sleipner.png"
    },
    {
      title1: "Sisuline",
      title2: "",
      src: "project-sisuline.png"
    },
    {
      title1: "Hiisi",
      title2: "Digital",
      src: "project-hiisi.png"
    },
    {
      title1: "Jalkahoitola",
      title2: "tunturiretki",
      src: "project-tunturiretki.png"
    },
    {
      title1: "Kissakahvila",
      title2: "",
      src: "project-kissakahvila.png"
    },
    {
      title1: "villetoimela",
      title2: "portfolio",
      src: "project-villetoimela.png"
    },
    {
      title1: "Parturi",
      title2: "kampaamo",
      src: "project-kampaamo.png"
    },
    {
      title1: "Juomapeli",
      title2: "",
      src: "project-elijuomapeli.png"
    },
    {
      title1: "Hiisi",
      title2: "Tattoo",
      src: "project-tattoo.png"
    },
  ];

  return (
    <main ref={ref} className="galleryMain">
      <div className="gallery">
        {/* <p class="section-title">Featured Work</p> */}
        {projects.map((project, index) => {
          return <Project key={index} project={project} index={index} />
        })}
      </div>
    </main>
  );
});

export default ProjectGallery;
