import gsap from 'gsap';

const projects = [
  {
    title: "HTML",
    color: "#F06318"
  },
  {
    title: "CSS",
    color: "#DCF018"
  },
  {
    title: "JAVASCRIPT",
    color: "#18F0E8"
  },
  {
    title: "TAILWIND",
    color: "#8C0CF0"
  },
  {
    title: "REACT",
    color: "#F0183C"
  },
  {
    title: "PHP",
    color: "#F0BA18"
  },
  {
    title: "SCSS",
    color: "#0C34F0"
  },
  {
    title: "NEXTJS",
    color: "#0CBCF0"
  },
  {
    title: "GIT",
    color: "#91F018"
  },
  {
    title: "WORDPRESS",
    color: "#F06318"
  },
  {
    title: "JQUERY",
    color: "#DCF018"
  },
  {
    title: "TYPESCRIPT",
    color: "#18F0E8"
  },
  {
    title: "SQL",
    color: "#8C0CF0"
  },
  {
    title: "C#",
    color: "#F0183C"
  },
  {
    title: "BOOTSTRAP",
    color: "#F0BA18"
  },
  {
    title: "GSAP",
    color: "#0C34F0"
  },
  {
    title: "NPM",
    color: "#0CBCF0"
  },
  {
    title: "YARN",
    color: "#91F018"
  },
  {
    title: "ACF",
    color: "#F06318"
  },
  {
    title: "CSS",
    color: "#DCF018"
  },
  {
    title: "WEB DESIGN",
    color: "#18F0E8"
  },
  {
    title: "FIGMA",
    color: "#8C0CF0"
  },
]


export default function Technologies() {

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, { top: "-1vw", backgroundColor: projects[index].color, duration: 0.3 })
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, { top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1 })
  }

  return (
    <div className="tech-container">
      <div className="tech-projectContainer">
        {
          projects.map((project, index) => {
            return <div onMouseEnter={(e) => { manageMouseEnter(e, index) }} onMouseLeave={(e) => { manageMouseLeave(e, index) }} key={index}>
              <p>{project.title}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}