import React, { useState } from 'react';
import './surveys.scss';
import Survey from '../../../../components/Survey';
import AddSurveyModal from '../../../../components/Survey/AddSurveyModal';
import { useSurveyContext } from '../../../../SurveyContext'; // Adjust the import path

function Surveys() {
    const { surveys, addSurvey } = useSurveyContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='survContainer'>
            <div className='courseHeader'>
              <div style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}>
                <span style={{color: "black"}}>Create Survey</span>
                <span className='courseAdd' onClick={() => setIsModalOpen(true)}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                    </svg>
                </span>
              </div>
            </div>
            <AddSurveyModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} addSurvey={addSurvey} />
            <div className='courseContainerItems'>
              {surveys.map((survey, index) => (
                  <Survey key={index} survey={survey} />
              ))}
            </div>
        </div>
    );
}

export default Surveys;
