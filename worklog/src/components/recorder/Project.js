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
    <div>
      <FormControl sx={{ m: 1, width: 180 }} size="large">
        <InputLabel id="demo-simple-select-autowidth-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1042}>Projec 1</MenuItem>
          <MenuItem value={2143}>Projec 2</MenuItem>
          <MenuItem value={1231}>Projec 3</MenuItem>
          <MenuItem value={2222}>Projec 4</MenuItem>
          <MenuItem value={2223}>Projec 5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
