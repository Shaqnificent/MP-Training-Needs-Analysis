import React, { useState } from 'react';
import './addTrainee.scss'

function AddTraineeModal({ addTrainee, isOpen, setIsOpen}) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Trainee');  // Default role
 

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrainee({
      name,
      role,
      projectCode: "N/A", // Setting default value as N/A
      status: "N/A",      // Setting default value as N/A
      priority: "N/A"     // Setting default value as N/A
    });
    setIsOpen(false);  // Close the modal after submitting
    setName('');       // Reset form data
    setRole('Trainee'); // Reset to default role
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
                  <option value="Trainee">Trainee</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
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
