import React, { createContext, useState } from "react";

const RecordContext = createContext();

export const RecordContextProvider = ({ children }) => {
  const [content, setContent] = useState("");

  const [project, setProject] = useState("");

  const [tag, setTag] = useState("");

  const [startTime, setStartTime] = useState(new Date());

  const [finishTime, setFinishTime] = useState(new Date());

  const [duration, setDuration] = useState(new Date());

  const [date, setDate] = useState(new Date());

  const value = {
    content,setContent,
    project,setProject,
    tag,setTag,
    startTime,setStartTime,
    finishTime,setFinishTime,
    duration,setDuration,
    date,setDate,
  };

  return (
    <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
  );
};

export default RecordContext;


