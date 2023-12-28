import Project from '../components/project';

export default function Home() {

  const projects = [
    {
      title1: "Magister",
      title2: "Solutions",
      src: "project-magister.png"
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg"
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg"
    },
  ]

  return (
    <main className="galleryMain">
      <div className="gallery">
        <p>Featured Work</p>
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}