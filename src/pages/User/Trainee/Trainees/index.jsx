import React, { useState, useEffect } from 'react';
import './trainees.scss';
import { useUserContext } from '../../../../UserContext'; // Adjust the path as needed

function Trainees() {
  const { user } = useUserContext();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (user) {
      // Define sections based on the user data
      const updatedSections = [
        { sectionTitle: "Profile", details: user.profile || [] },
        { sectionTitle: "Experience", details: user.experience || [] },
        { sectionTitle: "Contact", details: user.contact || [] }
      ];
      console.log(user)
      setSections(updatedSections);
    }
  }, [user]); // Dependency array includes `user` to react to changes

  if (!user) {
    return <div className="profileContainer">No user data available.</div>;
  }

  return (
    <div className='profileContainer'>
      <div className='userProfileContainer'>
        <div className='profileDetails'>
          <div className='userProfileAvatar'>
            <span>{user.username ? user.username[0] : '?'}</span>
          </div>
          <div className='userProfileName'>{user.username || 'Unavailable'}</div>
        </div>
        <div className='profileInformation'>
          {sections.map((section, index) => (
            <div key={index} className='infoRow'>
              <div className='infoRowTitle'>
                <span>{section.sectionTitle}</span>
              </div>
              <div className='infoRowDetails'>
                {section.details.length > 0 ? section.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className='detail'>
                    <span className='title'>{detail.title}</span>
                    <span className='info'>{detail.info}</span>
                  </div>
                )) : <div className='detail'>No details available.</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trainees;
