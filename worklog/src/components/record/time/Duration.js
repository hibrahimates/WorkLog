import moment from "moment";
import * as React from "react";
import { getHumanReadableClock } from "./DurationConverter";
import { TextField } from "@mui/material";

export default function Duration({ startProp: start, finishProp: finish }) {
  var finishMoment = moment(finish);
  var startMoment = moment(start);
  var durationInMs = finishMoment.diff(startMoment);

  return (
    <TextField
      id="outlined-read-only-input"
      label="Duration"
      defaultValue=""
      value={getHumanReadableClock(durationInMs)}
      sx={{ bgcolor: "#E0F0DE" }}
      InputProps={{
        readOnly: true,
      }}
    />
  );
}
