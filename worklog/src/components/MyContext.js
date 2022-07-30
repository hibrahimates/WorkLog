import React, { createContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {

    const [content, setContent] = useState('');

    const [project, setProject] = useState('');

    const [tag, setTag] = useState('');

    const [finishTime, setFinishTime] = useState('');

    const [startTime, setStartTime] = useState('');

    const [duration, setDuration] = useState('');

    const [date, setDate] = useState('');

    const value = {
        content,
        setContent,
        project,
        setProject,
        tag,
        setTag,
        startTime,
        setStartTime,
        finishTime,
        setFinishTime,
        duration,
        setDuration,
        date,
        setDate
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>)
}

export default MyContext;

// consumer kullanmak yerine useContext kullanmak daha iyi bir yontem!
