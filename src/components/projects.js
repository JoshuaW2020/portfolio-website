import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ProjectCard from "./projectCard.js"
import {  container,
          projectsContainer, } from "./projects.module.scss"

const Projects = () => {

  return (
    <section className={container} id="projects">
      <h3>Personal Projects</h3>
      <div className={projectsContainer}>
        <ProjectCard 
          image={
            <StaticImage src="../assets/images/portfolio_website.png" alt="A portfolio website home page" />
          } 
          title={"Portfolio Website"} 
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh mi, ac venenatis felis fermentum eu. Quisque laoreet iaculis libero vitae blandit."} 
          demoLink={"#home"} githubLink={"https://github.com/JoshuaW2020/portfolio-website"}
        />
        <ProjectCard 
          image={
            <StaticImage src="../assets/images/meeting_website_dashboard.png" alt="A portfolio website home page" />
          }
          title={"Meeting Coordination Website"} 
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh mi, ac venenatis felis fermentum eu. Quisque laoreet iaculis libero vitae blandit."} 
          demoLink={"#home"} githubLink={"#home"}
        />
        <ProjectCard 
          image={
            <StaticImage src="../assets/images/tower_defense.jpg" alt="A tower defense game on android" />
          } 
          title={"Moon Tower Defense"} 
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh mi, ac venenatis felis fermentum eu. Quisque laoreet iaculis libero vitae blandit."} 
          demoLink={""} githubLink={"https://github.com/JoshuaW2020/TowerDefense"}
        />

      </div>
    </section>
  )
}

export default Projects