import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Manager from './pages/User/Manager'
import Trainee from './pages/User/Trainee'
import Dashboard from './pages/User/Manager/Dashboard'
import Reports from './pages/User/Manager/Reports'
import Trainees from './pages/User/Manager/Trainees'
import Courses from './pages/User/Manager/Courses'

import TraineeDashboard from './pages/User/Trainee/Dashboard'
import NewTrainees from './pages/User/Trainee/Trainees'
import TraineeCourses from './pages/User/Trainee/Courses'
import TraineeSurveys from './pages/User/Trainee/Surveys'
import './App.css'
import { Route, Routes} from "react-router-dom"
import Surveys from './pages/User/Manager/Surveys'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='webContainer'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route  path='/manager' element={<Manager/>}>
            <Route  path='dashboard' element={<Dashboard/>}/>
            <Route  path='trainees' element={<Trainees/>}/>
            <Route  path='courses' element={<Courses/>}/>
            <Route  path='reports' element={<Reports/>}/>
            <Route  path='surveys' element={<Surveys/>}/>
          </Route>
          <Route  path='/trainee' element={<Trainee/>}>
            <Route  path='dashboard' element={<TraineeDashboard/>}/>
            <Route  path='trainees' element={<NewTrainees/>}/>
            <Route  path='courses' element={<TraineeCourses/>}/>
            <Route  path='surveys' element={<TraineeSurveys/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
