import React, { useState } from 'react';
import './addPositions.scss'
function AddPositionsModal({ isOpen, setIsOpen, addPosition }) {
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('Junior');
    const [education, setEducation] = useState('');
    const [years, setYears] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPosition = {
            title,
            level,
            education: education.split(',').map(t => t.trim()),
            requirements: requirements.split(',').map(t => t.trim()), // Converts comma-separated string to an array
            years
        };
        addPosition(newPosition);
        setIsOpen(false);  // Close the modal after submitting
        setTitle('');
        setLevel('Junior');
        setYears('');
        setRequirements('');
        setEducation('');
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label className='name'>
                        Title:
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                    </label>
                    <label className='select'>
                        Level:
                        <select value={level} onChange={e => setLevel(e.target.value)} required>
                            <option value="Junior">Junior</option>
                            <option value="Mid">Mid</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </label>
                    <label className='name'>
                        Years:
                        <input type="text" value={years} onChange={e => setYears(e.target.value)} required />
                    </label>
                    <label className='name'>
                        Topics (comma-separated):
                        <input type="text" value={requirements} onChange={e => setRequirements(e.target.value)} required />
                    </label>
                    <label className='name'>
                        Education (comma-separated):
                        <input type="text" value={education} onChange={e => setEducation(e.target.value)} required />
                    </label>
                   
                    <div className='createButtonContainer'>
                        <button className='createButton' type="submit">Create Position</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPositionsModal