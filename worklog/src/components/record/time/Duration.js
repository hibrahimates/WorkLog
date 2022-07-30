import { TextField } from "@mui/material";
import moment from "moment";
import React, { useContext, useEffect } from "react";
import RecordContext from "../../RecordContext";

export default function Duration() {
  const { startTime, finishTime } = useContext(RecordContext);
  const { duration, setDuration } = useContext(RecordContext);

  useEffect(() => {
    var finishMoment = moment(finishTime);
    var startMoment = moment(startTime);
    var durationInMs = finishMoment.diff(startMoment);

    setDuration(getHumanReadableClock(durationInMs));
    console.log("duration:   " + duration);
  });

  //Milisecond cinsinden verilen değeri humanize eder.
  //=> 3126546451 > 11:24:50 şeklinde çevirir.
  function getHumanReadableClock(ms) {
    var seconds = Math.floor((ms / 1000) % 60);
    var minutes = Math.floor((ms / (1000 * 60)) % 60);
    var hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    if (hours < 0) {
      hours = hours + 24;
    }
    if (minutes < 0) {
      minutes = minutes + 60;
    }
    if (seconds < 0) {
      seconds = seconds + 60;
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes;
  }

  // 11:24:50 > 3126546451 şeklinde çevirir.
  function getMilisecondClock(humanReadableClock) {
    const clockParts = humanReadableClock.split(":");

    let hours = clockParts[0];
    let minutes = clockParts[1];
    let seconds = clockParts[2];

    return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
  }

  return (
    <TextField
      id="outlined-read-only-input"
      label="Duration"
      defaultValue=""
      // value={getHumanReadableClock(durationInMs)}
      value={duration}
      sx={{ bgcolor: "#E0F0DE" }}
      InputProps={{
        readOnly: true,
      }}
    />
  );
}
//start time finish time ve duration
//state'i yukarı taşıma yöntemiyle yapmayı dene.(Time üzerinden)
