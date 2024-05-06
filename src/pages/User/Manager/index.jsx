import { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link, Outlet } from 'react-router-dom'
import './manager.scss'
function Manager() {
  const [count, setCount] = useState(0)

  return (
    <div className='managerContainer'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Manager
