import React, { useContext } from 'react';
import './surveys.scss';
import Survey from '../../../../components/Trainee/Survey';
import { useUserContext } from '../../../../UserContext'; // Ensure the import path is correct

function Surveys() {
    const { user } = useUserContext();  // Access user context to get the current user
    console.log("Survey User", user)
    if (!user || !user.survey) {
        return <div className='survContainer'>No surveys available or user not selected.</div>;  // Handle no surveys or no user
    }

    return (
        <div className='survContainer'>
            <div className='courseContainerItems'>
                {user.survey.map((survey, index) => (  // Use surveys from the user's surveys array
                    <Survey key={index} survey={survey} />
                ))}
            </div>   
        </div>
    );
}

export default Surveys;
