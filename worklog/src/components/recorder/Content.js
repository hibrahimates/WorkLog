import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Content() {
  return (
    <Box
      //component="form"
      sx={{
        
        minWidth: "25ch",
        flexGrow: 1,
        bgcolor: "#2d2d2d" 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="What are you working on?"
        variant="outlined"
        fullWidth
        sx={{ bgcolor: "#E2F0DE" }}
      />
    </Box>
  );
}
