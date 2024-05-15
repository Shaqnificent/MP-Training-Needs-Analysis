import React, { useState } from 'react';
import './trainees.scss';
import { useUserContext } from '../../../../UserContext'; // Confirm this path
import AddTraineeModal from '../../../../components/Trainee/AddTraineeModal';
import OptionsModal from '../../../../components/Trainee/OpenModal';
import search from '../../../../assets/trainee/search.svg';
import elipsis from '../../../../assets/trainee/elipsis.svg';

function Trainees() {
  const { courses, surveys, trainees = [], addTrainee } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  const openModal = (trainee) => {
    setSelectedTrainee(trainee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrainee(null);
  };

  const handleAssign = (type, item) => {
    console.log(`Assigning ${type} to ${selectedTrainee.name}:`, item.title);
    closeModal();
  };

  const filterTrainees = (search) => {
    return trainees.filter(trainee =>
      trainee.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='traineesContainer'>
      {isModalOpen && (
        <OptionsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          surveys={surveys}
          courses={courses}
          onAssign={handleAssign}
          selectedUsername={selectedTrainee.username}
        />
      )}
      <AddTraineeModal addTrainee={addTrainee} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='filterContainer'>
        <div className="searchContainer">
          <input 
            type="text"
            id="myInput"
            onChange={handleSearchChange}
            placeholder="Search for names..."
            title="Type in a name"
          />
          <span className="searchIcon">
            <img src={search} alt="" />
          </span>
        </div>
        <div onClick={() => setIsOpen(true)} style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}>
          <span className='traineeAdd'>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
            </svg>
          </span>
        </div>
      </div>
      <div className='tableContainer'>
      <div style={{ display: "grid", color: "black", fontSize: "14px",fontWeight: "bold" ,gridTemplateColumns: "33% 33% 33%", padding: "10px 5%" }}>
            <span>Name</span>
            <span>Position</span>
            <span>Role</span>
          </div>
        {filterTrainees(searchTerm).map((trainee, index) => (
          <div key={index} style={{ display: "grid", color: "black", fontSize: "12px", gridTemplateColumns: "33% 33% 33%", padding: "10px 5%" }}>
            <span style={{ color: "blue", }}>{trainee.name}</span>
            <span>{trainee.position}</span>
            <span style={{display: "flex", justifyContent: "space-between"}}>{trainee.role} <img style={{cursor: "pointer"}} onClick={() => openModal(trainee)} src={elipsis} alt="" /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainees;
