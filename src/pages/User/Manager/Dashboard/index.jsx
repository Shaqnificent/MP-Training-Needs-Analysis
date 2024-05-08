import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dash from '../../../../components/Dash'
import './dashboard.scss'
function Dashboard() {
  return (
    <div className='dashboardContainer'>
        <div className='dashContainerItems'>
            <Dash />
            <Dash />
            <Dash />
            <Dash />
            <Dash />
        </div>
       
    </div>
  )
}

export default Dashboard
