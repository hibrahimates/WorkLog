import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

export default function StartTime({ startProp }) {
  const [value, setValue] = React.useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label="Start Time"
        ampm={false}
        clearable
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          startProp(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ bgcolor: "#E0F0DE" }} />
        )}
      />
    </LocalizationProvider>
  );
}
