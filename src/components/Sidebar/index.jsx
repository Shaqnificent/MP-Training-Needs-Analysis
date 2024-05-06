import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/home/logo.svg'
import dashboard from '../../assets/sidebar/dashboard.svg'
import trainees from '../../assets/sidebar/trainees.svg'
import courses from '../../assets/sidebar/Courses.svg'
import reports from '../../assets/sidebar/reports.svg'
import logout from '../../assets/sidebar/logout.svg'

import './sidebar.scss'
function Sidebar() {
  return (
    <div className='sidebarContainer'>
      <div className='logoIcon'>
        <img className='sidebarLogo' src={logo} alt="" />
      </div>

      <div className='userDetails'> 
        <div className='userIcon'>
          <span>T</span>
        </div>
        <div className='userInfo'>
            <span className='title'>Tracy</span>
            <span className='role'>Manager</span>
        </div>
      </div>

      <div className='sideRoutes'>
        <div className='linkContainer'>
            <span className='icon'><img className='linkIcon' src={dashboard} alt="" /></span>
            <span className='linkTitle'>
              <Link to="/manager/dashboard">
                Dashboard
              </Link>
            </span>
        </div>
        <div className='linkContainer'>
            <span className='icon'><img className='linkIcon' src={trainees} alt="" /></span>
            <span className='linkTitle'>
              <Link to="/manager/trainees">
                Trainees
              </Link>
            </span>
        </div>
        <div className='linkContainer'>
            <span className='icon'><img className='linkIcon' src={courses} alt="" /></span>
            <span className='linkTitle'>
              <Link to="/manager/courses">
                Courses
              </Link>
            </span>
        </div>
        <div className='linkContainer'>
            <span className='icon'><img className='linkIcon' src={reports} alt="" /></span>
            <span className='linkTitle'>
              <Link to="/manager/reports">
                Reports
              </Link>
            </span>
        </div>
      </div>

      <div className='logoutContainer'>
          <span className='icon'><img className='linkIcon' src={logout} alt="" /></span>
          <span className='linkTitle'>
            <Link to="/manager/dashboard">
              Logout
            </Link>
          </span>
      </div>
    </div>
  )
}

export default Sidebar
