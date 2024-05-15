import React, { useContext } from 'react';
import './courses.scss';
import Course from '../../../../components/Trainee/Course';
import { useUserContext } from '../../../../UserContext'; // Update the import path as needed

function Courses() {
    const { user } = useUserContext();  // Access the user context

    if (!user || !user.courses) {
        return <div>No courses available or user not selected.</div>;  // Handle cases where there are no courses or no user
    }

    return (
        <div className='courseContainer'>
            <div className='courseContainerItems'>
                {user.courses.map((course, index) => (  // Use courses from the user's course array
                    <Course key={index} course={course} />
                ))}
            </div>   
        </div>
    );
}

export default Courses;
