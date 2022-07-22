import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Content() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="What are you working on?" variant="outlined" sx={{bgcolor:'#E2F0DE'}}/>
    

    </Box>
  );
}
