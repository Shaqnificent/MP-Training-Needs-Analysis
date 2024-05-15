import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

const initialUsers = {
    user1: {
        username: "Tracy",
        name: "Tracy Black",
        password: "123",
        role: "Manager",
        profile: [
            { title: 'Gender', info: 'Female' },
            { title: 'Dob', info: '12/2/2000' },
            { title: 'Title', info: 'Developer' }
        ],
        experience: [
            { title: 'Years', info: '5' },
            { title: 'Field', info: 'Software Development' },
            { title: 'Specialty', info: 'Frontend Development' }
        ],
        contact: [
            { title: 'Email', info: 'user@example.com' },
            { title: 'Phone', info: '+1234567890' },
            { title: 'LinkedIn', info: 'linkedin.com/in/username' }
        ],
    },
    user2: {
        username: "Tom",
        name: "Tom Thompson",
        password: "123",
        role: "Trainee",
        profile: [
            { title: 'Gender', info: 'Female' },
            { title: 'Dob', info: '12/2/2000' },
            { title: 'Title', info: 'Developer' }
        ],
        experience: [
            { title: 'Years', info: '5' },
            { title: 'Field', info: 'Software Development' },
            { title: 'Specialty', info: 'Frontend Development' }
        ],
        contact: [
            { title: 'Email', info: 'user@example.com' },
            { title: 'Phone', info: '+1234567890' },
            { title: 'LinkedIn', info: 'linkedin.com/in/username' }
        ],
        courses: [
            
        ],
        survey: [
            
        ]
    },
    // Define other users similarly
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(initialUsers);
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        for (const key in users) {
            if (users[key].username === username && users[key].password === password) {
                setUser(users[key]);
                return users[key].role; // Return the user role on successful login
            }
        }
        return null; // Return null if no user is found
    };

    const logout = () => {
        setUser(null);
    };

    const addUser = (newUser) => {
        const newKey = `user${Object.keys(users).length + 1}`; // Generate a new key for the user
        setUsers(prevUsers => ({
            ...prevUsers,
            [newKey]: { ...newUser, role: 'Trainee' } // Default role as 'Trainee'
        }));
    };

    // Filter function to retrieve trainees only
    const trainees = Object.values(users).filter(user => user.role === "Trainee").map(trainee => {
        const titleInfo = trainee.profile.find(p => p.title === "Title");
        return {
            ...trainee,
            position: titleInfo ? titleInfo.info : 'No position defined' // Ensure there's a default or check for undefined
        };
    });

    const addCourseToUser = (username, course) => {
        setUsers(prevUsers => {
            const userKey = Object.keys(prevUsers).find(key => prevUsers[key].username === username);
            if (!userKey) {
                console.error('User not found:', username);
                return prevUsers; // Return the unchanged state if user not found
            }
    
            // If user exists, proceed to add the course
            return {
                ...prevUsers,
                [userKey]: {
                    ...prevUsers[userKey],
                    courses: [...prevUsers[userKey].courses, course]
                }
            };
        });
    };
    
    
    const addSurveyToUser = (username, survey) => {
        setUsers(prevUsers => {
            const userKey = Object.keys(prevUsers).find(key => prevUsers[key].username === username);
            if (!userKey) {
                console.error('User not found:', username);
                return prevUsers; // Return the unchanged state if user not found
            }
    
            // If user exists, proceed to add the course
            return {
                ...prevUsers,
                [userKey]: {
                    ...prevUsers[userKey],
                    survey: [...prevUsers[userKey].survey, survey]
                }
            };
        });
    };
    const updateUser = (username, updates) => {
        setUsers(prevUsers => ({
            ...prevUsers,
            [username]: { ...prevUsers[username], ...updates }
        }));
    };

    return (
        <UserContext.Provider value={{
            user, users, login, logout, trainees,
            addUser, updateUser, addCourseToUser, addSurveyToUser
        }}>
            {children}
        </UserContext.Provider>
    );
};
