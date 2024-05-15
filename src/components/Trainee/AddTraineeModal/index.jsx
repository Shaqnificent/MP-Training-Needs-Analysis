import React, { useState, useContext } from 'react';
import './addTrainee.scss';
import { useUserContext } from '../../../UserContext'; // Confirm this path is correct

function AddTraineeModal({ isOpen, setIsOpen }) {
  const { addUser } = useUserContext(); // Using addUser from UserContext
  const roles = ["Trainee", "Manager", "Admin"];
  const positions = ["Software Developer", "Project Manager", "Product Manager", "Data Scientist", "UX/UI Designer"];

  const [name, setName] = useState('');
  const [role, setRole] = useState('Trainee');  // Default role
  const [position, setPosition] = useState('Software Developer');

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({
      username: name,
      name: name,
      password: "default", // Assuming a default password; consider a different approach for real applications
      role,
      profile: [
        { title: 'Title', info: position }
      ],
      courses: [
        { Title: '', status: "" }
      ],
     
    });
    setIsOpen(false); // Close the modal after submitting
    setName('');      // Reset form data
    setRole('Trainee');// Reset to default role
    setPosition('Software Developer'); // Reset to default position
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
          <form onSubmit={handleSubmit}>
            <label className='name'>
              <span>Name</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className='select'>
              <span>Role</span>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </label>
            <label className='select'>
              <span>Position</span>
              <select value={position} onChange={(e) => setPosition(e.target.value)} required>
                {positions.map(pos => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </label>
            <div className='createButtonContainer'>
              <button className='createButton' type="submit">Create Trainee</button>
            </div>
          </form>
        </div>
      </div>
      )}
    </>
  );
}

export default AddTraineeModal;
