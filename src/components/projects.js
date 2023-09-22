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
            <StaticImage src="../assets/images/portfolio_website.PNG" alt="A portfolio website home page" />
          } 
          title={"Portfolio Website"} 
          desc={"A personal website and portfolio page for myself. This application describes my skills and project accomplishments to people like you! Developed with Gatsby, React.js, SASS, HTML, and hosted on Netlify."} 
          demoLink={"#home"} githubLink={"https://github.com/JoshuaW2020/portfolio-website"}
        />
        <ProjectCard 
          image={
            <StaticImage src="../assets/images/meeting_website_dashboard.PNG" alt="A portfolio website home page" />
          }
          title={"Meeting Coordination Website"} 
          desc={"A web application developed for a construction consulting company as a team of six. The app helps coordinate meeting sessions and saves time by displaying upcoming sessions as part of projects and allows searching of the event backlog reducing space and time spent on physical storage of session information. Implemented with React.js, Python Django, HTML, CSS, Selenium testing and hosted on GoDaddy. No links are available as it was a packaged product for the client."} 
          demoLink={""} githubLink={""}
        />
        <ProjectCard 
          image={
            <StaticImage src="../assets/images/tower_defense.jpg" alt="A tower defense game on android" />
          } 
          title={"Moon Tower Defense"}
          desc={"A mobile application tower defense game for the Android OS. The project explores object oriented principles and design patterns using a game written in the Java programming language."} 
          demoLink={""} githubLink={"https://github.com/JoshuaW2020/TowerDefense"}
        />

      </div>
    </section>
  )
}

export default Projects