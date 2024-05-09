import { useState } from 'react'
import { Link } from 'react-router-dom'
import './course.scss'
function Course({course}) {
  return (
    <div className='dashContainer'>
        <div className='dashProfile'>
            <div className='userDetails'> 
                <div className='userIcon'>
                <span style={{color: "white"}}>
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <   path d="M7.87989 0.00784722C7.73475 0.0294301 7.59614 0.0826897 7.47389 0.163847C7.47389 0.163847 6.20889 0.959847 4.84889 1.82085C3.48889 2.68085 1.97589 3.62885 1.62989 3.82085C1.60855 3.83011 1.58753 3.84012 1.56689 3.85085C0.310889 4.62585 0.0498889 5.89185 0.00488889 6.60185C0.00188889 6.63485 0.00488889 6.66185 0.00488889 6.69685C-0.00611111 6.96285 0.00488889 7.13385 0.00488889 7.13385V20.1968C0.00488889 22.0948 2.21789 23.0078 4.31789 23.0078C5.01789 23.0078 5.71789 22.8948 6.31789 22.6948C6.71789 22.4948 7.00489 22.0948 7.00489 21.6948V11.1948C7.00489 8.89485 7.50489 7.81485 9.00489 6.91485C9.40489 6.71485 13.5989 3.81985 13.5989 3.81985C13.7989 3.61985 14.0049 3.21385 14.0049 2.91385V2.81985C14.0049 2.41985 13.8049 2.11385 13.5049 1.91385C13.2049 1.71385 12.8049 1.71385 12.5049 1.91385C12.4049 2.01385 6.30489 6.12085 5.00489 6.82085C3.70489 7.62085 2.49189 7.81385 2.19189 7.41385C2.09889 7.32085 2.01789 7.03585 2.00489 6.75785V6.69485C2.00589 6.42285 2.07589 5.91085 2.62989 5.56985C3.19189 5.25685 4.58689 4.36585 5.94289 3.50785C6.51589 3.14485 6.58689 3.10585 7.03589 2.81985C7.095 3.06414 7.24393 3.27722 7.45304 3.41667C7.66215 3.55611 7.9161 3.6117 8.16435 3.57236C8.41259 3.53303 8.63692 3.40165 8.79268 3.20439C8.94844 3.00713 9.0242 2.75845 9.00489 2.50785V1.00785C9.00601 0.865312 8.97664 0.724185 8.91876 0.593926C8.86088 0.463668 8.77582 0.347289 8.66928 0.252591C8.56275 0.157893 8.4372 0.0870641 8.30105 0.0448534C8.16491 0.00264275 8.02131 -0.00997461 7.87989 0.00784722ZM15.8799 3.50785C15.7209 3.53429 15.5706 3.59879 15.4419 3.69585C15.4419 3.69585 10.4079 7.08285 9.53589 7.66385C9.52532 7.67428 9.51498 7.68495 9.50489 7.69585C8.78089 8.23885 8.35189 8.88485 8.16089 9.47585C8.05387 9.80925 8.0012 10.1577 8.00489 10.5078V10.8208C8.00345 10.8518 8.00345 10.8829 8.00489 10.9138V23.0078C8.00489 24.9078 10.1929 26.0078 12.1929 26.0078C13.0929 26.0078 13.9049 25.8138 14.5049 25.4138C15.7049 24.7138 21.5049 20.1958 21.5049 20.1958C21.8049 19.9958 22.0049 19.7138 22.0049 19.4138V6.41385C22.0049 5.91385 21.8109 5.61385 21.4109 5.41385C21.1109 5.21385 20.6179 5.30785 20.3179 5.50785C18.7179 6.70785 14.4109 10.0958 13.4109 10.6958C12.0109 11.4958 10.6919 11.6958 10.1919 11.1958C9.99189 10.9958 10.0049 10.8078 10.0049 10.5078C10.0109 10.3358 10.0299 10.1878 10.0679 10.0698C10.1239 9.89585 10.2379 9.68185 10.6609 9.35185C10.6809 9.33585 10.6709 9.33685 10.6919 9.32085C11.4149 8.83785 13.6259 7.33085 15.0679 6.35085C15.1496 6.57002 15.3055 6.75361 15.5086 6.8697C15.7116 6.9858 15.949 7.02704 16.1793 6.98625C16.4096 6.94547 16.6183 6.82524 16.7692 6.64648C16.92 6.46772 17.0034 6.24174 17.0049 6.00785V4.50785C17.006 4.36531 16.9766 4.22418 16.9188 4.09393C16.8609 3.96367 16.7758 3.84729 16.6693 3.75259C16.5627 3.65789 16.4372 3.58706 16.3011 3.54485C16.1649 3.50264 16.0213 3.49003 15.8799 3.50785ZM20.0049 10.8208V12.8208L15.0049 16.6948V14.6948L20.0049 10.8208Z" fill="white"/>
                    </svg>
                </span>
                </div>
                <div className='userInfo'>
                    <span className='title'>{course.title}</span>
                    <span className='role'>{course.difficulty}</span>
                </div>
            </div>
            <div style={{display: "flex",gap: "20px", alignItems: "center", padding: "10px 0 0 10px"}}>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#6B6B6B"/>
                    </svg>
                </span>
                <span style={{color: "grey", fontSize: "12px"}}>Duration: 4hrs</span>
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
                <span>Topics</span>
            </div>

            <div
                style={
                    {
                        display: "grid",
                        color: "black",
                        fontSize: "12px",
                        gridTemplateColumns: "50% 50%",
                        padding: "10px 5%",
                        gap: "5px",
                        maxHeight: "60px",
                        overflowY: "elipsis"
                    }
                }
            >
                {course.topic.map((course, index) => (
                    <span>{course}</span>
                ))}
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

export default Course