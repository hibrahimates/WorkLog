import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Content({ contentProp }) {
  const [content, setContent] = React.useState(""); //state

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
        label="What are you working on?"
        variant="outlined"
        fullWidth
        //helperText="Baslik Gir"
        value={content}
        //defaultValue={""}
        sx={{ bgcolor: "#E2F0DE" }}
        onChange={(event) => {
          setContent(event.target.value);
          contentProp(event.target.value);
          console.log(event.target.value);
        }}
      />
    </Box>
  );
}
