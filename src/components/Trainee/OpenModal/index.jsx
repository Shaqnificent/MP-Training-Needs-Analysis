import React, { useState } from 'react';
import { useSurveyContext } from '../../../SurveyContext'; // Adjust the import path as needed
import { useCourseContext } from '../../../CourseContext'; // Adjust the import path as needed
import { useUserContext } from '../../../UserContext'; // Adjust the import path as needed
import './OpenModal.scss';

function OptionsModal({ isOpen, onClose, onAssign, selectedUsername }) {
    const { surveys } = useSurveyContext();
    const { courses } = useCourseContext();
    const { addCourseToUser, addSurveyToUser } = useUserContext();
    const [selectedOption, setSelectedOption] = useState('');  // 'survey' or 'course'

    if (!isOpen) return null;

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleAssignment = (item) => {
        if (selectedOption === 'course') {
            // Create a course object with a status set to Pending
            const courseToAssign = { ...item, status: "Pending" };
            console.log(selectedUsername)
            // Call addCourseToUser from the context, pass the selectedUsername and the course object
            addCourseToUser(selectedUsername, courseToAssign);
        }
        else{
            const surveyToAssign = {item};
            addSurveyToUser(selectedUsername, surveyToAssign)

        }        
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

export default OptionsModal;
