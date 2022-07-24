import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import * as React from "react";

export default function Duration({ startProp: start, finishProp: finish }) {
  var startMoment = moment(start);
  var finishMoment = moment(finish);
  var duration =  new Date("Mon Jan 01 2018 01:11:00 GMT+0300 (GMT+03:00)");

  

  var fark = finishMoment.diff(startMoment);


  duration = moment.duration(fark);

  console.log('duration');
  console.log(duration);

  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label="Duration"
        ampm={false}
        
        value={''+ duration} // "Monday, August 12th 2019, 5:52:00 pm"}
        renderInput={(params) => (
          <TextField {...params} sx={{ bgcolor: "#E0F0DE" }} />
        )}
      />
    </LocalizationProvider>
  );
}
