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
        <div className='courseContainerItems'>
        {courses.map((course, index) => (
                <Course key={index} course={course} />
            ))}
        </div>
       
    </div>
  )
}

export default Courses
