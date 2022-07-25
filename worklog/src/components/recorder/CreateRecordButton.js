import Button from "@mui/material/Button";
import * as React from "react";

export default function CreateRecordButton({ createButtonProp }) {
  function create() {
    console.log(createButtonProp);
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        create();
      }}
    >
      Create
    </Button>
  );
}
