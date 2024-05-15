import { useState } from 'react'
import { Link } from 'react-router-dom'
import './dash.scss'
function Dash({trainee}) {
  return (
    <div className='dashContainer'>
        <div className='dashProfile'>
            <div className='userDetails'> 
                <div className='userIcon'>
                <span style={{color: "white"}}>{trainee.name[0]}</span>
                </div>
                <div className='userInfo'>
                    <span className='title'>{trainee.name}</span>
                    <span className='role'>{trainee.role}</span>
                </div>
            </div>
        </div>
        
       <div className='courseDetails'>
            <div
                style={
                    {
                        display: "grid",
                        color: "#116CFF",
                        fontSize: "12px",
                        gridTemplateColumns: "50% 50%",
                        padding: "10px 5%"
                    }
                }
            >
                <span>Training</span>
                <span>Status</span>
            </div>

            {trainee.courses.map((course, index)=>(
                
                <div
                    style={
                        {
                            display: "grid",
                            color: "black",
                            fontSize: "12px",
                            gridTemplateColumns: "50% 50%",
                            padding: "10px 5%"
                        }
                    }
                >
                    <span>{course.title}</span>
                    <span>{course.status}</span>
                </div>
            ))}
               
         </div>

       </div>

  )
}

export default Dash
