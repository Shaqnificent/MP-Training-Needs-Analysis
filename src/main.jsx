import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './UserContext';
import { CourseProvider } from './CourseContext.jsx'
import { JobsProvider } from './JobContext.jsx'
import { SurveyProvider } from './SurveyContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CourseProvider>
          <JobsProvider>
            <SurveyProvider>
              <App />
            </SurveyProvider>
          </JobsProvider>
        </CourseProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
