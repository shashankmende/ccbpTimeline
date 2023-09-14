// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h1>MY JOURNEY OF CCBP 4.0"</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          const {categoryId} = each
          console.log('category id', categoryId)
          if (categoryId === 'COURSE') {
            return <CourseTimelineCard course={each} key={each.id} />
          }
          return <ProjectTimelineCard project={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
