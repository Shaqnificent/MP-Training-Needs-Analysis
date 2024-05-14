import React, { useState } from 'react';
import './courses.scss';
import Course from '../../../../components/Course';
import AddCourseModal from '../../../../components/Course/AddCourseModal';

function Courses() {
    const [courses, setCourses] = useState([
        {
            title: "Introduction to Programming",
            difficulty: "Beginner",
            hours: 30,
            topic: ["Programming Basics", "Python", "Problem Solving"], 
            link: "https://www.youtube.com/watch?v=Tn6-PIqc4UM"
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    return (
        <div className='courseContainer'>
            <div className='courseHeader'>
              <div style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}> 
                <span style={{color: "black"}}>Create Course</span>
                <span className='courseAdd' onClick={() => setIsModalOpen(true)}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                  </svg>
                </span>
              </div>
            </div>
            <AddCourseModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} addCourse={addCourse} />
            <div className='courseContainerItems'>
              {courses.map((course, index) => (
                  <Course key={index} course={course} />
              ))}
            </div>
        </div>
    );
}

export default Courses;
