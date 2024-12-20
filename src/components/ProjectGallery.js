/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import Project from '../components/project';

const ProjectGallery = forwardRef((props, ref) => {
  const projects = [
    {
      title1: "Pyöräliitto",
      title2: "",
      src: "project-pyoraliitto.png",
      href: "https://pyoraliitto.fi/"
    },
    {
      title1: "Kyocera",
      title2: "Technologies",
      src: "project-kyocera.png",
      href: "https://kyoceratechnologies.com/"
    },
    {
      title1: "Lääkärikeskus",
      title2: "leijonamieli",
      src: "project-leijonamieli.png",
      href: "https://perhelaakarikeskus.fi/"
    },
    {
      title1: "SNT",
      title2: "group",
      src: "project-snt.png",
      href: "https://snt-group.fi/"
    },
    {
      title1: "Tammermatic",
      title2: "",
      src: "project-tammermatic.png",
      href: "https://tammermatic.com/"
    },
    {
      title1: "JIS",
      title2: "Automation",
      src: "project-jis.png",
      href: "https://jis.fi/"
    },
    {
      title1: "Jylhä",
      title2: "logistics",
      src: "project-jylha.png",
      href: "https://jylhalogistics.fi/"
    },
    {
      title1: "Roihu",
      title2: "Law",
      src: "project-roihu.png",
      href: "https://roihulaw.fi/"
    },
    {
      title1: "Suvimaen",
      title2: "klubitalo",
      src: "project-klubitalo.png",
      href: "https://suvimaenklubitalo.fi/"
    },
    {
      title1: "Magister",
      title2: "Solutions",
      src: "project-magister.png",
      href: "https://data.magister.fi/"
    },
    {
      title1: "Kontukoti",
      title2: "",
      src: "project-kontu.png",
      href: "https://kontukoti.fi/"
    },
    {
      title1: "Jääkiekko",
      title2: "museo",
      src: "project-jaakiekkomuseo.png",
      href: "https://jaakiekkomuseo.fi/"
    },
    {
      title1: "Sleipner",
      title2: "",
      src: "project-sleipner.png",
      href: "https://sleipner.com/"
    },
    {
      title1: "Weight",
      title2: "tracker",
      src: "project-weightracker.png",
      href: "https://villetoimela-weight-tracker.netlify.app/"
    },
    {
      title1: "Sisuline",
      title2: "",
      src: "project-sisuline.png",
      href: "https://sisuline.fi/"
    },
    {
      title1: "Hiisi",
      title2: "Digital",
      src: "project-hiisi.png",
      href: "https://www.hiisi.digital/"
    },
    {
      title1: "Jalkahoitola",
      title2: "tunturiretki",
      src: "project-tunturiretki.png",
      href: "https://www.tunturiretki.fi/"
    },
    {
      title1: "Kissakahvila",
      title2: "",
      src: "project-kissakahvila.png",
      href: "https://templates-cat-cafe.netlify.app/"
    },
    {
      title1: "villetoimela",
      title2: "portfolio",
      src: "project-villetoimela.png",
      href: "#"
    },
    {
      title1: "Parturi",
      title2: "kampaamo",
      src: "project-kampaamo.png",
      href: "https://kampaamo.demo.hiisi.digital/"
    },
    {
      title1: "Crypto",
      title2: "tracker",
      src: "project-crypto-tracker.png",
      href: "https://nextjs-crypto-app.netlify.app/"
    },
    {
      title1: "Juomapeli",
      title2: "",
      src: "project-elijuomapeli.png",
      href: "https://www.elijuomapeli.com/"
    },
    {
      title1: "Hiisi",
      title2: "Tattoo",
      src: "project-tattoo.png",
      href: "https://tattoo-shop.demo.hiisi.digital/"
    },
  ];

  return (
    <main ref={ref} className="galleryMain">
      <div className="gallery">
        {/* <p class="section-title">Featured Work</p> */}
        {projects.map((project, index) => {
          return <Project key={index} project={project} index={index} />
        })}
        <p class="section-title">..And, of course, Ive had the opportunity to work on many further development projects.</p>
      </div>
    </main>
  );
});

export default ProjectGallery;
