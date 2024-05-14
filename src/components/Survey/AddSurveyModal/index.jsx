import React, { useState } from 'react';

function AddSurveyModal({ isOpen, setIsOpen, addSurvey }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [importance, setImportance] = useState('Medium');
    const [questions, setQuestions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSurvey = {
            title,
            description,
            importance,
            questions: questions.split('\n') // Splits the string into an array by new lines
        };
        addSurvey(newSurvey);
        setIsOpen(false);
        setTitle('');
        setDescription('');
        setImportance('Medium');
        setQuestions('');
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
                    <label className='name'>
                        Description:
                        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
                    </label>
                    <label className='select'>
                        Importance:
                        <select value={importance} onChange={e => setImportance(e.target.value)} required>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>
                    <label className='name'>
                        Questions (separate by new line):
                        <textarea value={questions} onChange={e => setQuestions(e.target.value)} required />
                    </label>
                    <div className='createButtonContainer'>
                        <button className='createButton' type="submit">Create Survey</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddSurveyModal