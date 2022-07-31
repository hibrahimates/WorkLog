import React, { createContext, useState } from 'react';
import { NONE as PROJECT_NONE } from "./record/Project";
import { NONE as TAG_NONE } from "./record/Tag";
import { NONE as TIME_NONE } from "./record/time/Time";

const RecordContext = createContext();

export const RecordContextProvider = ({ children }) => {

    const [content, setContent] = useState('');

    const [project, setProject] = useState(PROJECT_NONE);

    const [tag, setTag] = useState(TAG_NONE);

    const [startTime, setStartTime] = useState(TIME_NONE);

    const [finishTime, setFinishTime] = useState(TIME_NONE);

    const [duration, setDuration] = useState(TIME_NONE);

    const [date, setDate] = useState(TIME_NONE);

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
        <RecordContext.Provider value={value}>
            {children}
        </RecordContext.Provider>)
}

export default RecordContext;

// consumer kullanmak yerine useContext kullanmak daha iyi bir yontem!
