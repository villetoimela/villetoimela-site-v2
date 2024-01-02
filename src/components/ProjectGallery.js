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
