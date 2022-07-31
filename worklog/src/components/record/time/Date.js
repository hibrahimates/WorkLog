import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useContext } from "react";
import RecordContext from "../../RecordContext";

export default function Date() {

  const { date, setDate } = useContext(RecordContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ bgcolor: "#E2F0DE" }} />
        )}
      />
    </LocalizationProvider>
  );
}
