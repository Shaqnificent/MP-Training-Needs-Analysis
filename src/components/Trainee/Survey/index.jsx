import React, { useState } from 'react';
import './survey.scss';

function Survey({ survey }) {
    const [showModal, setShowModal] = useState(false);
    const [responses, setResponses] = useState(() => survey.item.questions.map(() => ''));

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleResponseChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const handleSubmit = () => {
        console.log(responses); // Here you would handle the submission of the responses
        handleCloseModal();
    };

    return (
        <div className='surContainer'>
            <div className='dashProfile'>
                <div className='userDetails'>
                    <div className='userIcon'>
                        {/* User Icon */}
                    </div>
                    <div className='userInfo'>
                        <span className='title'>{survey.item.title}</span>
                        <span className='role'>{survey.item.description}</span>
                    </div>
                </div>
            </div>

            <div className='courseDetails'>
                <div
                    style={{
                        display: "grid",
                        color: "#116CFF",
                        fontSize: "12px",
                        gridTemplateColumns: "50% 50%",
                        padding: "10px 5%"
                    }}
                >
                    <span>Questions</span>
                    <span>Importance</span>
                </div>

                <div
                    style={{
                        display: "grid",
                        color: "black",
                        fontSize: "12px",
                        gridTemplateColumns: "50% 50%",
                        padding: "10px 5%",
                        gap: "5px",
                        maxHeight: "60px",
                        overflowY: "auto"
                    }}
                >
                    <span>{survey.item.questions.length}</span>
                    <span>{survey.item.importance}</span>
                </div>
                <div className='submitButton'>
                    <button onClick={handleOpenModal}>Attempt</button>
                </div>
            </div>

            {showModal && (
                <div className="modalBackground"
                >
                    <div className="modalContent">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{survey.item.title}</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            {survey.item.questions.map((question, index) => (
                                <div key={index}>
                                    <p>{question}</p>
                                    <input
                                        type="text"
                                        value={responses[index]}
                                        onChange={(e) => handleResponseChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                            <div className='submitContainer'>
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Survey;
