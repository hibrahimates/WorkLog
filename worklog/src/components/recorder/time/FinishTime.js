import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

export default function FinishTime({finishProp}) {
 
  const [value, setValue] = React.useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label="Finish Time"
        ampm={false}
        clearable
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          finishProp(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ bgcolor: "#E0F0DE" }} />
        )}
      />
    </LocalizationProvider>
  );
}
