import { useState } from 'react'
import { Link } from 'react-router-dom'
import './courses.scss'
import Course from '../../../../components/Course.jsx';
function Courses() {
  const courses = [
    {
        title: "Introduction to Programming",
        difficulty: "Beginner",
        hours: 30,
        topic: ["Programming Basics", "Python", "Problem Solving"]
    },
    {
        title: "Web Development",
        difficulty: "Intermediate",
        hours: 50,
        topic: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        title: "Data Structures and Algorithms",
        difficulty: "Advanced",
        hours: 40,
        topic: ["Complexity Analysis", "Data Structures", "Sorting Algorithms", "Search Algorithms"]
    },
    {
        title: "Machine Learning",
        difficulty: "Advanced",
        hours: 60,
        topic: ["Python", "Data Science", "Neural Networks", "Deep Learning"]
    },
    {
        title: "Digital Marketing",
        difficulty: "Beginner",
        hours: 20,
        topic: ["SEO", "Content Marketing", "Social Media Marketing"]
    },
    {
        title: "Cloud Computing",
        difficulty: "Intermediate",
        hours: 45,
        topic: ["AWS", "Azure", "Cloud Security", "DevOps"]
    }
];

  return (
    <div className='courseContainer'>
        <div className='courseHeader'>
          <div style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}> 
            <span style={{color: "black"}}>Create Course</span>
            
            <span className='courseAdd'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                </svg>
            </span>
            
          </div>
        </div>
        <div className='courseContainerItems'>
          {courses.map((course, index) => (
              <Course key={index} course={course} />
          ))}
        </div>
       
    </div>
  )
}

export default Courses
