import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

export default function Project() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    // alert(age)
  };

  return (
   
      <FormControl sx={{ minWidth: 150 }} size="large">
        <InputLabel id="demo-simple-select-autowidth-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          sx={{bgcolor:'#E2F0DE'}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1042}>Project 1</MenuItem>
          <MenuItem value={2143}>A Project 2</MenuItem>
          <MenuItem value={1231}>B Project 3</MenuItem>
          <MenuItem value={2222}>C Project 4</MenuItem>
          <MenuItem value={2223}>D Project 5</MenuItem>
          <MenuItem value={1233}>10003416854</MenuItem>
          <MenuItem value={1234}>Berkan'ın Project</MenuItem>
          <MenuItem value={1235}>14003552342</MenuItem>
          <MenuItem value={1236}>14001231234</MenuItem>
        </Select>
      </FormControl>
    
  );
}
