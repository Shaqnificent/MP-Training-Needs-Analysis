import React, { useState } from 'react';
import './courseModal.scss'
function AddCourseModal({ isOpen, setIsOpen, addCourse }) {
    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState('Beginner');
    const [hours, setHours] = useState('');
    const [topic, setTopic] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCourse = {
            title,
            difficulty,
            hours: parseInt(hours, 10),
            topic: topic.split(',').map(t => t.trim()), // Converts comma-separated string to an array
            link
        };
        addCourse(newCourse);
        setIsOpen(false);  // Close the modal after submitting
        setTitle('');
        setDifficulty('Beginner');
        setHours('');
        setTopic('');
        setLink('');
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
                        Difficulty:
                        <select value={difficulty} onChange={e => setDifficulty(e.target.value)} required>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </label>
                    <label className='name'>
                        Hours:
                        <input type="text" value={hours} onChange={e => setHours(e.target.value)} required />
                    </label>
                    <label className='name'>
                        Topics (comma-separated):
                        <input type="text" value={topic} onChange={e => setTopic(e.target.value)} required />
                    </label>
                    <label className='name'>
                        Link:
                        <input type="url" value={link} onChange={e => setLink(e.target.value)} required />
                    </label>
                    <div className='createButtonContainer'>
                        <button className='createButton' type="submit">Create Course</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCourseModal