import Button from "@mui/material/Button";
import * as React from "react";
import MyContext from "./RecordCreater";

export default function Create() {

  const handleClick = (myContextValue) => {
    create(myContextValue);
    clear(myContextValue);
  };

  function clear(clearValue) {
    console.log(clearValue);
    console.log("temizlendi");
  }

  function create(creatValue) {
    console.log("create yapıldı.");
    console.log(creatValue);
  }

  return (
    <MyContext.Consumer>
      {(myContextValue) => {
        <Button variant="outlined" onClick={handleClick(myContextValue)}>
          Create
        </Button>
      }}
    </MyContext.Consumer>
  );
}
