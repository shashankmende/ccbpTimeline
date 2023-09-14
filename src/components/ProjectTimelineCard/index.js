// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {project} = props
  const {
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = project
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="heading-container">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
