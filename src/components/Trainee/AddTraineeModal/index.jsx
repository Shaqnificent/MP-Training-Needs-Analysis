import React, { useState } from 'react';
import './addTrainee.scss'

function AddTraineeModal({ addTrainee, isOpen, setIsOpen}) {
  const roles = ["Trainee", "Manager", "Admin"];
  const positions = ["Software Developer", "Project Manager", "Product Manager", "Data Scientist", "UX/UI Designer"];

  const [name, setName] = useState('');
  const [role, setRole] = useState('Trainee');  // Default role
  const [position, setPosition] = useState('Software Developer');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrainee({
      name,
      role,
      position,
      projectCode: "N/A",
      status: "N/A",
      priority: "N/A"
    });
    setIsOpen(false);  // Close the modal after submitting
    setName('');       // Reset form data
    setRole('Trainee'); // Reset to default role
    setPosition('Software Developer'); // Reset to default position
  };
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Add Trainee</button> */}
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

export default AddTraineeModal
