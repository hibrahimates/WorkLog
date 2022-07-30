import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useContext } from "react";
import RecordContext from "../RecordContext";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const tagList = [
  "Tag_1",
  "Tag_2",
  "Tag_3",
  "Tag_4",
  "Tag_5",
  "Tag_6",
  "Tag_7",
  "Tag_8",
  "Tag_9",
  "Tag_10",
];

export const NONE = () => {
  return (
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
  );
};

export default function Tag() {
  const { tag, setTag } = useContext(RecordContext);

  return (
    <FormControl sx={{ minWidth: 180 }} size="large">
      <InputLabel id="demo-simple-select-autowidth-label">Tag</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select"
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
        autoWidth
        label="Tag"
        sx={{ bgcolor: "#E2F0DE", gap: 100 }}
      >
        <TextField label="Create" variant="filled" />

        {NONE}
        {tagList.map((element, index) => {
          return (
            <MenuItem value={index}>
              <LocalOfferIcon />
              {element}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
