import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Manager from './pages/User/Manager'
import Dashboard from './pages/User/Manager/Dashboard'
import Reports from './pages/User/Manager/Reports'
import Trainees from './pages/User/Manager/Trainees'
import Courses from './pages/User/Manager/Courses'
import './App.css'
import { Route, Routes} from "react-router-dom"

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
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
