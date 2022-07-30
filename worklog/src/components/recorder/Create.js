import Button from "@mui/material/Button";
import React, { useContext } from "react";
import MyContext from "../MyContext";
import { NONE as PROJECT_NONE } from './../record/Project';

export default function Create() {

  const { content, setContent, project, setProject } = useContext(MyContext);

  const handleClick = () => {
    create();
    clear();
  }

  function create() {
    console.log('content ' + content);
    console.log('project ' + project);
    console.log("create yapıldı.");
  }

  function clear() {
    setContent("");
    setProject(PROJECT_NONE);
    console.log("temizlendi");
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      Create
    </Button>
  )
}
