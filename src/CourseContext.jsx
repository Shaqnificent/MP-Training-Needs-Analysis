import React, { createContext, useState, useContext } from 'react';

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

const initialCourses = [
    {
        title: "Introduction to Programming",
        difficulty: "Beginner",
        hours: 30,
        topic: ["Programming Basics", "Python", "Problem Solving"], 
        link: "https://www.youtube.com/watch?v=Tn6-PIqc4UM"
    },
];

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState(initialCourses);

    const addCourse = (newCourse) => {
        setCourses(prevCourses => [...prevCourses, newCourse]);
    };

    return (
        <CourseContext.Provider value={{ courses, addCourse }}>
            {children}
        </CourseContext.Provider>
    );
};
