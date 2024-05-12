import { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link, Outlet } from 'react-router-dom'
import dashboard from '../../../assets/sidebar/dashboard.svg'
import trainees from '../../../assets/sidebar/trainees.svg'
import courses from '../../../assets/sidebar/Courses.svg'
import reports from '../../../assets/sidebar/reports.svg'
import survey from '../../../assets/sidebar/survey.svg'
import './trainee.scss'

function Trainee() {
  const userRole = sessionStorage.getItem('userRole');
  const userName = sessionStorage.getItem('userName');
  const links = [
    { title: 'Dashboard', to: '/trainee/dashboard', iconSrc: dashboard },
    { title: 'Profile', to: '/trainee/trainees', iconSrc: trainees },
    { title: 'Courses', to: '/trainee/courses', iconSrc: courses },
    { title: 'Surveys', to: '/trainee/surveys', iconSrc: survey }
  ];
  return (
    <div className='traineeContainer'>
      <Sidebar links={links} name={userName} role={userRole}/>
      <Outlet/>
    </div>
  )
}

export default Trainee
