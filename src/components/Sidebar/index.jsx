import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/home/logo.svg'
import logout from '../../assets/sidebar/logout.svg'

import './sidebar.scss'
function Sidebar({links, name, role}) {
  return (
    <div className='sidebarContainer'>
      <div className='logoIcon'>
        <img className='sidebarLogo' src={logo} alt="" />
      </div>

      <div className='userDetails'> 
        <div className='userIcon'>
          <span>{name[0]}</span>
        </div>
        <div className='userInfo'>
            <span className='title'>{name}</span>
            <span className='role'>{role}</span>
        </div>
      </div>

      <div className='sideRoutes'>
      {links.map((link, index) => (
        <div key={index} className='linkContainer'>
          <span className='icon'><img className='linkIcon' src={link.iconSrc} alt="" /></span>
          <span className='linkTitle'>
            <Link to={link.to}>
              {link.title}
            </Link>
          </span>
        </div>
      ))}
    </div>

      <div className='logoutContainer'>
          <span className='icon'><img className='linkIcon' src={logout} alt="" /></span>
          <span className='linkTitle'>
            <Link to="/">
              Logout
            </Link>
          </span>
      </div>
    </div>
  )
}

export default Sidebar
