import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyContext from "../recorder/RecordCreater.js";

export default function Content() {
  //
  const handleChange = (changedValue, myContextValue) => {
    myContextValue.setContent(changedValue);
  };

  return (
    <MyContext.Consumer>
      {(myContextValue) => {
        <Box
          //component="form"
          sx={{
            minWidth: "25ch",
            flexGrow: 1,
            bgcolor: "#2d2d2d",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            //label="What are you working on?"
            label="Content"
            variant="outlined"
            fullWidth
            value={myContextValue.content}
            sx={{ bgcolor: "#E2F2DE" }}
            onChange={(event) => {
              handleChange(event.target.value, myContextValue);
            }}
          />
        </Box>;
      }}
    </MyContext.Consumer>
  );
}
