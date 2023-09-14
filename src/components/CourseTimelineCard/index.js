// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {course} = props
  const {title, courseTitle, description, duration, tagsList} = course
  return (
    <div className="coursetimelinecard-container">
      <div className="title-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="unordered-container">
        {tagsList.map(each => (
          <li key={each.id} className="list-item">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
