import Button from "@mui/material/Button";
import React, { useContext } from "react";
import RecordContext from "../RecordContext";
import { Repository } from "../../repository/Repository";
import { NONE as PROJECT_NONE } from "./../record/Project";
import { NONE as TAG_NONE } from "./../record/Tag";

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
    var storageObject = prepareStorageObject();
    Repository.create(storageObject);
    resetRecord();
  };

  function prepareStorageObject() {
    let storageObject = {
      id: Repository.generateId(),
      content: content,
      project: project,
      tag: tag,
      startTime: startTime,
      finishTime: finishTime,
      date: date,
      duration: duration,
    };
    return storageObject;
  }

  function resetRecord() {
    setContent("");
    setProject(PROJECT_NONE);
    setTag(TAG_NONE);
    setStartTime(new Date());
    setFinishTime(new Date());
    setDate(new Date());

    console.log("temizlendi");
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      Create
    </Button>
  );
}
