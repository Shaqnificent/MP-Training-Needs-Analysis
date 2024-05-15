import React from 'react';
import { useUserContext } from '../../../../UserContext'; // Update this path as needed
import Dash from '../../../../components/Dash'
import './dashboard.scss';

function Dashboard() {
  const { trainees } = useUserContext(); // Assuming getTrainees exists and fetches trainee data
console.log(trainees)
  return (
    <div className='dashboardContainer'>
        <div className='dashContainerItems'>
        {trainees.map((trainee, index) => (
            <Dash key={index} trainee={trainee} />
        ))}
        </div>
    </div>
  );
}

export default Dashboard;
