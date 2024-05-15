import React, { createContext, useState, useContext } from 'react';

const SurveyContext = createContext();

export const useSurveyContext = () => useContext(SurveyContext);

const initialSurveys = [
    {
        title: "Trainee Feedback Survey",
        description: "A survey to gather feedback from trainees about their training experience.",
        importance: "High",
        questions: [
            "How satisfied are you with the training material?",
            "Was the pace of the course appropriate for your learning?",
            "How effective was the instructor?",
            "What improvements would you suggest?"
        ]
    },
    {
        title: "Post-Training Evaluation",
        description: "Evaluate the usefulness of the training and its applicability to your job.",
        importance: "Medium",
        questions: [
            "How relevant was the training to your current role?",
            "Have you applied the learned skills in your work?",
            "What was the most valuable part of the training?",
            "What was lacking in the training?"
        ]
    },
];

export const SurveyProvider = ({ children }) => {
    const [surveys, setSurveys] = useState(initialSurveys);

    const addSurvey = (newSurvey) => {
        setSurveys(prevSurveys => [...prevSurveys, newSurvey]);
    };

    return (
        <SurveyContext.Provider value={{ surveys, addSurvey }}>
            {children}
        </SurveyContext.Provider>
    );
};
