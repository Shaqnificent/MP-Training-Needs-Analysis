import React, { useState } from 'react';
import './OpenModal.scss'
function OptionsModal({ isOpen, onClose, surveys, courses, onAssign }) {
    const [selectedOption, setSelectedOption] = useState('');  // 'survey' or 'course'

    if (!isOpen) return null;

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleAssignment = (item) => {
        onAssign(selectedOption, item);
        onClose();  // Close modal after assignment
    };

    return (
        <div className="modalBackground" onClick={onClose}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                {!selectedOption && (
                    <>
                        <button onClick={() => handleOptionSelect('survey')}>Assign Survey</button>
                        <button onClick={() => handleOptionSelect('course')}>Assign Course</button>
                    </>
                )}
                {selectedOption === 'survey' && surveys.map((survey) => (
                    <button key={survey.title} onClick={() => handleAssignment(survey)}>
                        {survey.title}
                    </button>
                ))}
                {selectedOption === 'course' && courses.map((course) => (
                    <button key={course.title} onClick={() => handleAssignment(course)}>
                        {course.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
 export default OptionsModal