import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import * as React from "react";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function Tag() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    // alert(age)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 180 }} size="large">
        <InputLabel id="demo-simple-select-autowidth-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <TextField label="Create" variant="filled" />

          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          <MenuItem value="">
            <MenuItem value={11}>
              <LocalOfferIcon />
              Tag 1
            </MenuItem>
          </MenuItem>

          <MenuItem value="">
            <MenuItem value={12}>
              <LocalOfferIcon />
              Tag 2
            </MenuItem>
          </MenuItem>
          <MenuItem value="">
            <MenuItem value={13}>
              <LocalOfferIcon />
              Tag 3
            </MenuItem>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
