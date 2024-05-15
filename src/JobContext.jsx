import React, { createContext, useState, useContext } from 'react';

const JobsContext = createContext();

export const useJobsContext = () => useContext(JobsContext);

const initialPositions = [
    {
        title: "Software Developer",
        level: "Junior",
        education: ["Bsc. Computing"],
        years: "None",
        requirements: ["Java", "Database Management"]
    },
    {
        title: "UI/UX Designer",
        level: "Senior",
        education: ["Google UI Certification"],
        years: "2+",
        requirements: ["Adobe Photoshop", "Figma"]
    },
    {
        title: "Data Analyst",
        level: "Mid",
        Education: ["MSc. Computer Science"],
        years: "3+",
        requirements: ["SQL", "Power Bi"]
    },
];

export const JobsProvider = ({ children }) => {
    const [positions, setPositions] = useState(initialPositions);

    const addPosition = (newPosition) => {
        setPositions(prevPositions => [...prevPositions, newPosition]);
    };

    return (
        <JobsContext.Provider value={{ positions, addPosition }}>
            {children}
        </JobsContext.Provider>
    );
};
