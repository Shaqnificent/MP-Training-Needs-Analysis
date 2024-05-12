import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dash from '../../../../components/Dash'
import notice from '../../../../assets/trainee/notice.svg'
import './dashboard.scss'
function Dashboard() {
  const userData = {
    upcomingSessions: [
      { id: 1, title: "Advanced JavaScript", date: "2024-06-15", time: "10:00 AM" },
      { id: 2, title: "React Fundamentals", date: "2024-06-20", time: "02:00 PM" }
    ],
    courses: [
      { id: 1, name: "Web Development", progress: 75 },
      { id: 2, name: "Machine Learning", progress: 40 }
    ],
    assessments: [
      { id: 1, course: "Web Development", score: 85 },
      { id: 2, course: "Machine Learning", score: 78 }
    ],
    skillGaps: [
      { id: 1, skill: "React Hooks", recommendedCourses: ["React Advanced"] },
      { id: 2, skill: "Back-end Integration", recommendedCourses: ["Node.js Basics"] }
    ]
  };
  const UpcomingSessions = ({ sessions }) => {
    return (
      <div className='traineeDash'>
        <div className='traineeDashHeader'>
          <span className='imageContainer'><img src={notice} alt="" /></span>
          <span><p>Upcoming Training Sessions</p></span>
        </div>
        <ul>
          {sessions.map(session => (
            <li key={session.id}>{session.title} - {session.date} at {session.time}</li>
          ))}
        </ul>
      </div>
    );
  };
  const Courses = ({ courses }) => {
    return (
      <div className='traineeDash'>
        <div className='traineeDashHeader'>
          <span className='imageContainer'><img src={notice} alt="" /></span>
          <span><p>Current Courses and Progress</p></span>
        </div>
        
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.name} - Progress: {course.progress}%</li>
          ))}
        </ul>
      </div>
    );
  };
  const Assessments = ({ assessments }) => {
    return (
      <div className='traineeDash'>
        <div className='traineeDashHeader'>
          <span className='imageContainer'><img src={notice} alt="" /></span>
          <span><p>Assessments and Scores</p></span>
        </div>
        <ul>
          {assessments.map(assessment => (
            <li key={assessment.id}>{assessment.course} - Score: {assessment.score}</li>
          ))}
        </ul>
      </div>
    );
  };
  const SkillGaps = ({ gaps }) => {
    return (
      <div className='traineeDash'>
        <div className='traineeDashHeader'>
          <span className='imageContainer'><img src={notice} alt="" /></span>
          <span><p>Skill Gaps and Recommendations</p></span>
        </div>
        <ul>
          {gaps.map(gap => (
            <li key={gap.id}>{gap.skill} - Recommended Courses: {gap.recommendedCourses.join(', ')}</li>
          ))}
        </ul>
      </div>
    );
  };
        
  return (
    <div className='traineeDshboardContainer'>
      <h2>Trainee Dashboard</h2>
      <div className='traineeSection'>
        <UpcomingSessions sessions={userData.upcomingSessions} />
        <Courses courses={userData.courses} />
        <Assessments assessments={userData.assessments} />
        <SkillGaps gaps={userData.skillGaps} />
      </div>
      
    </div>
  )
}

export default Dashboard
