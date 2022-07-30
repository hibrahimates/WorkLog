import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useContext } from "react";
import MyContext from "../MyContext";

export default function Content() {

  const { content, setContent } = useContext(MyContext);

  const handleChange = (event) => {
    setContent(event.target.value);
  }

  return (

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
        value={content}
        sx={{ bgcolor: "#E2F2DE" }}
        onChange={(event) => { handleChange(event) }}
      />
    </Box>
  );
}
