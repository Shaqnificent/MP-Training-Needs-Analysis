import { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link, Outlet } from 'react-router-dom'
import dashboard from '../../../assets/sidebar/dashboard.svg'
import trainees from '../../../assets/sidebar/trainees.svg'
import courses from '../../../assets/sidebar/Courses.svg'
import reports from '../../../assets/sidebar/reports.svg'
import survey from '../../../assets/sidebar/survey.svg'
import './manager.scss'

function Manager() {
  const userRole = sessionStorage.getItem('userRole');
  const userName = sessionStorage.getItem('userName');
  const links = [
    { title: 'Dashboard', to: '/manager/dashboard', iconSrc: dashboard },
    { title: 'Trainees', to: '/manager/trainees', iconSrc: trainees },
    { title: 'Courses', to: '/manager/courses', iconSrc: courses },
    { title: 'Reports', to: '/manager/reports', iconSrc: reports },
    { title: 'Surveys', to: '/manager/surveys', iconSrc: survey }
  ];
  return (
    <div className='managerContainer'>
      <Sidebar links={links} name={userName} role={userRole}/>
      <Outlet/>
    </div>
  )
}

export default Manager
