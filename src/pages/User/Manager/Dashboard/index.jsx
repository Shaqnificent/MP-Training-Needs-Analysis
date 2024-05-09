import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dash from '../../../../components/Dash'
import './dashboard.scss'
function Dashboard() {
    const trainees = [
        { name: "Gary Black", role: "Developer", projectCode: "Web1080", status: "Pending", priority: "High" },
        { name: "Anna Smith", role: "Designer", projectCode: "Design360", status: "Active", priority: "Medium" },
        { name: "Tom Brown", role: "Project Manager", projectCode: "PM900", status: "Completed", priority: "Low" },
        { name: "Lisa Green", role: "Developer", projectCode: "Web1120", status: "Active", priority: "High" },
        { name: "Mark Lee", role: "UI/UX Designer", projectCode: "UX1000", status: "Pending", priority: "High" },
        { name: "Jane Doe", role: "QA Analyst", projectCode: "QA1040", status: "Active", priority: "Medium" },
        { name: "John Davis", role: "Data Scientist", projectCode: "Data20", status: "Completed", priority: "Low" },
        { name: "Sarah Miller", role: "System Administrator", projectCode: "Sys500", status: "Pending", priority: "Medium" },
        { name: "Carlos Gomez", role: "Backend Developer", projectCode: "Dev300", status: "Active", priority: "High" },
        { name: "Emily Howard", role: "Product Manager", projectCode: "PM950", status: "Completed", priority: "Low" }
    ];
    
    
  return (
    <div className='dashboardContainer'>
        <div className='dashContainerItems'>
        {trainees.map((trainee, index) => (
                <Dash key={index} trainee={trainee} />
            ))}
        </div>
       
    </div>
  )
}

export default Dashboard
