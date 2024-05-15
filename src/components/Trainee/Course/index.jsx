import React, { useState } from 'react';
import './course.scss';

function Course({ course }) {
    const [showModal, setShowModal] = useState(false);
    const [courseStats, setCourseStats] = useState(course.stats || {});  // Assuming 'stats' is an existing or new property of course

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleStatChange = (e) => {
        setCourseStats({
            ...courseStats,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        console.log("Saving updated stats:", courseStats);
        // Here, integrate API call or context method to save updated stats
        handleCloseModal();
    };

    const handleStart = () => {
        console.log("Starting course:", course.title);
        // Suppose `course.link` holds the URL you want to open
        if (course.link) {
            window.open(course.link, '_blank');  // '_blank' ensures it opens in a new tab
        } else {
            console.error("No link provided for the course.");
        }
        handleCloseModal();
    };
    

    return (
        <div className='couContainer'>
            <div className='dashProfile'>
                <div className='userDetails'>
                    <div className='userIcon'>
                        {/* User Icon Placeholder */}
                    </div>
                    <div className='userInfo'>
                        <span className='title'>{course.title}</span>
                        <span className='role'>{course.difficulty}</span>
                    </div>
                </div>
            </div>
            <div className='courseDetails'>
                    <div className='submitButtonNew'>
                        <button onClick={handleOpenModal}>Select</button>
                    </div> 
            </div>
            {showModal && (
                <div className="modalBackground">
                <div className="couModalContent">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h3>{course.title}</h3>
                    <div>
                        <label className='status'>
                            <span>Status:</span>
                            <select name="stats" value={courseStats.stats || ''} onChange={handleStatChange}>
                                <option value="Pending">Pending</option>
                                <option value="Started">Started</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </label>
                    </div>
                    <div className='submitContainer'>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleStart}>Visit</button>
                    </div>
                </div>
            </div>
            
            )}
        </div>
    );
}

export default Course;
