import Button from "@mui/material/Button";
import React, { useContext } from "react";
import RecordContext from "../RecordContext";
import { NONE as PROJECT_NONE } from "./../record/Project";
import { NONE as TAG_NONE } from "./../record/Tag";
import { NONE as TIME_NONE } from "./../record/time/Time";

export default function Create() {
  const {
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
    date,
    setDate,
  } = useContext(RecordContext);

  const handleClick = () => {
    create();
    clear();
  };

  function create() {
    console.log("content " + content);
    console.log("project " + project);
    console.log("tag " + tag);
    console.log("startTime " + startTime);
    console.log("finishTime " + finishTime);
    console.log("duration " + duration);
    console.log("date " + date);

    console.log("create yapıldı.");
  }

  function clear() {
    setContent("");
    setProject(PROJECT_NONE);
    setTag(TAG_NONE);
    setStartTime(TIME_NONE);
    setFinishTime(TIME_NONE);
    //setDuration();
    setDate(TIME_NONE);

    console.log("temizlendi");
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      Create
    </Button>
  );
}
