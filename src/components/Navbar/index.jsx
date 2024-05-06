import { useState } from 'react'
import utechLogo from '../../assets/nav/utech.svg'
import socialLogo from '../../assets/nav/socials.svg'
// import viteLogo from '/vite.svg'
import './nav.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <div className='navParent'>
        <div className='navContainer'>
            <div className='navHeader'>
                <span className='utechLogo'><img src={utechLogo} alt="" /></span>
                <span className='navHeader-details'>Training Needs Analysis</span>
            </div>
            <div className='socialsLogo'>
                <span className='socials'><img src={socialLogo} alt="" /></span>
            </div>
        
        </div>
        <div className='navRoute'> 
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
