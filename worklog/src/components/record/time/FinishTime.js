import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import RecordContext from "../../RecordContext";

export default function FinishTime() {
  const { finishTime, setFinishTime } = useContext(RecordContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label="Finish Time"
        ampm={false}
        clearable
        value={finishTime}
        onChange={(newValue) => {
          setFinishTime(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ bgcolor: "#E0F0DE" }} />
        )}
      />
    </LocalizationProvider>
  );
}
