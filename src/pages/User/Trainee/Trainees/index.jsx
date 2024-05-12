import { useState } from 'react'
import { Link } from 'react-router-dom'
import elipsis from '../../../../assets/trainee/elipsis.svg'
import search from '../../../../assets/trainee/search.svg'
import './trainees.scss'
function Trainees() {
  const profileSections = [
    {
      sectionTitle: 'User Profile',
      details: [
        { title: 'Gender', info: 'Female' },
        { title: 'Dob', info: '12/2/2000' },
        { title: 'Title', info: 'Developer' }
      ]
    },
    {
      sectionTitle: 'Experience',
      details: [
        { title: 'Years', info: '5' },
        { title: 'Field', info: 'Software Development' },
        { title: 'Specialty', info: 'Frontend Development' }
      ]
    },
    {
      sectionTitle: 'Contact Information',
      details: [
        { title: 'Email', info: 'user@example.com' },
        { title: 'Phone', info: '+1234567890' },
        { title: 'LinkedIn', info: 'linkedin.com/in/username' }
      ]
    }
  ];
  return (
    <div className='profileContainer'>
      <div className='userProfileContainer'>
        <div className='profileDetails'>
          <div className='userProfileAvatar'><span>T</span></div>
          <div className='userProfileName'>Tom Thompson</div>
        </div>  
        <div className='profileInformation'>
          {profileSections.map((section, index) => (
            <div key={index} className='infoRow'>
              <div className='infoRowTitle'>
                <span>{section.sectionTitle}</span>
              </div>
              <div className='infoRowDetails'>
                {section.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className='detail'>
                    <span className='title'>{detail.title}</span>
                    <span className='info'>{detail.info}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Trainees
