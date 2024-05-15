import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/home/logo.svg';
import logout from '../../assets/sidebar/logout.svg';

import './sidebar.scss';

function Sidebar({ links, name, role }) {
  const navigate = useNavigate();

  // Effect to check if the name is not available and redirect
  useEffect(() => {
    if (!name) {
      navigate('/'); // Redirects to the login page, adjust this path as needed
    }
  }, [name, navigate]); // Dependencies array includes name and navigate

  if (!name) return null; // Optionally render null while the redirection is processing

  return (
    <div className='sidebarContainer'>
      <div className='logoIcon'>
        <img className='sidebarLogo' src={logo} alt="" />
      </div>

      <div className='userDetails'> 
        <div className='userIcon'>
          <span>{name ? name[0] : ''}</span>
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
  );
}

export default Sidebar;
