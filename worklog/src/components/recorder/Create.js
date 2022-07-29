import Button from "@mui/material/Button";
import * as React from "react";
import { none } from "../record/Project";

export default function Create({
  //content Props
  readContentProp,
  clearContentProp,

  //project Props
  readProjectProp,
  clearProjectProp,
}) {
  function clearContent() {
    clearContentProp("");
    clearProjectProp(none);
    console.log("temizlendi");

  }

  function create() {
    console.log("create yapıldı.");
    console.log("readProjectProp: " + readProjectProp);
    console.log("readContentProp: " + readContentProp);
       
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        create();
        clearContent();
      }}
    >
      Create
    </Button>
  );
}
