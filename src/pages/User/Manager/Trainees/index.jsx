import { useState } from 'react'
import { Link } from 'react-router-dom'
import elipsis from '../../../../assets/trainee/elipsis.svg'
import search from '../../../../assets/trainee/search.svg'
import './trainees.scss'
function Trainees() {

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
    <div className='traineesContainer'>
      <div className='filterContainer'>
        <div className="searchContainer">
          <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search for names..." title="Type in a name" />
          <span className="searchIcon">
              <img src={search} alt="" />
          </span>
        </div>
        <div style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}> 
            <span className='traineeAdd'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                </svg>
            </span>
            
          </div>
      </div>
      <div className='tableContainer'>
        <div
            style={
                {
                    display: "grid",
                    color: "black",
                    gridTemplateColumns: "25% 25% 25% 25%",
                    padding: "10px 5%",
                    fontSize: "14px", 
                    fontWeight: "bold",
                    boxSizing: "border-box"
                }
            }
        >
            <span>Name</span>
            <span>Role</span>
            <span>Course</span>
            <span>Status</span>
        </div>  
        {trainees.map((trainee, index) => (
          <div
              style={
                  {
                      display: "grid",
                      color: "black",
                      fontSize: "12px",
                      gridTemplateColumns: "25% 25% 25% 25%",
                      padding: "10px 5%",
                      // borderBottom: "0.5px solid lightgrey"
                  }
              }
          >
            <span style={{ color: "#002868", }}>{trainee.name}</span>
            <span>{trainee.role}</span>
            <span>{trainee.projectCode}</span>
            <span style={{display: "flex", justifyContent: "space-between"}}>{trainee.status} <img src={elipsis} alt="" /></span>
          </div>  
        ))}
      </div>
      
    </div>
  )
}

export default Trainees
