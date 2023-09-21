import * as React from "react"
import {  container,
          imageContainer,
          textContainer, } from "./projectCard.module.scss"

const ProjectCard = ({ image, title="Title",  desc="Description", demoLink="", githubLink="" }) => {
  let links = null;
  if (demoLink) {
    links = (
      <>
        {demoLink ? <li>
        <a href={demoLink} target="_blank" rel="noreferrer">Live Demo</a>
        </li> : null}
      </>
    );
  }

  if (links && githubLink) {
    links = (
      <>
        {links}
        <span> | </span>
        <li>
          <a href={githubLink} target="_blank" rel="noreferrer">Github Repo</a>
        </li>
      </>
    )
  }
  else {
    links = (
      <>
        <li>
          <a href={githubLink} target="_blank" rel="noreferrer">Github Repo</a>
        </li>
      </>
    )
  }

  return (
    <div className={container}>
      <div className={imageContainer}>
        {image}
      </div>
      <article className={textContainer}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <ul>
          {links}
        </ul>
      </article>
    </div>
  )
}

export default ProjectCard