import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useContext } from "react";
import MyContext from "../MyContext";

export const projectList = [
  "Project_1",
  "Project_2",
  "Project_3",
  "Project_4",
  "Project_5",
  "Project_6",
  "Project_7",
  "Project_8",
  "Project_9",
  "Project_10",
  "Project_11",
  "Project_12",
  "Project_13",
  "Project_14",
  "Project_15",
  "Project_16",
];

export const NONE = () => {
  return (
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
  );
};

export default function Project() {

  const { project, setProject } = useContext(MyContext);


  const handleChange = (event) => {
    setProject(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 150 }} size="large">
      <InputLabel id="demo-simple-select-autowidth-label">Project</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select"
        value={project}
        onChange={(event) => { handleChange(event) }}
        autoWidth
        label="ProjectList"
        sx={{ bgcolor: "#E2F0DE" }}
      >
        {NONE}
        {projectList.map((element, index) => {
          return <MenuItem value={index}>{element}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
