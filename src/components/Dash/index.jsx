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
            <div style={{display: "flex",gap: "20px", alignItems: "center", padding: "10px 0 0 10px"}}>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#6B6B6B"/>
                    </svg>
                </span>
                <span style={{color: "grey", fontSize: "12px"}}>Training Time: 4hrs</span>
            </div>
        </div>
        
       <div className='courseDetails'>
            <div
                style={
                    {
                        display: "grid",
                        color: "#116CFF",
                        fontSize: "12px",
                        gridTemplateColumns: "33% 33% 33%",
                        padding: "10px 5%"
                    }
                }
            >
                <span>Training</span>
                <span>Priority</span>
                <span>Status</span>
            </div>

            <div
                style={
                    {
                        display: "grid",
                        color: "black",
                        fontSize: "12px",
                        gridTemplateColumns: "33% 33% 33%",
                        padding: "10px 5%"
                    }
                }
            >
                <span>{trainee.projectCode}</span>
                <span>{trainee.priority}</span>
                <span>{trainee.status}</span>
            </div>

       </div>

        <div className='dashAddContainer'>
            <span className='dashAdd'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                </svg>
            </span>
        </div>
    </div>
  )
}

export default Dash
