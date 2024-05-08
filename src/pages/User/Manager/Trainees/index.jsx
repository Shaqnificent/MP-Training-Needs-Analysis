import { useState } from 'react'
import { Link } from 'react-router-dom'
import elipsis from '../../../../assets/trainee/elipsis.svg'
import './trainees.scss'
function Trainees() {
  return (
    <div className='traineesContainer'>
      <div className='tableContainer'>
        <div
            style={
                {
                    display: "grid",
                    color: "black",
                    fontSize: "12px",
                    gridTemplateColumns: "25% 25% 25% 25%",
                    padding: "10px 5%",
                    fontSize: "14px", 
                    fontWeight: "bold"
                }
            }
        >
            <span>Name</span>
            <span>Role</span>
            <span>Course</span>
            <span>Status</span>
        </div>  
        <div
            style={
                {
                    display: "grid",
                    color: "black",
                    fontSize: "12px",
                    gridTemplateColumns: "25% 25% 25% 25%",
                    padding: "10px 5%",
                    fontSize: "12px", 
                }
            }
        >
            <span style={{ color: "#002868"}}>Gary Black</span>
            <span>Developer</span>
            <span>Web1080</span>
            <span>Pending <span><img src={elipsis} alt="" /></span></span>
        </div>  
      </div>
      
    </div>
  )
}

export default Trainees
