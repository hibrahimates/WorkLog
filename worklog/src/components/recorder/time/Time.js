import { Box } from "@mui/system";
import Date from "./Date.js";
import Duration from "./Duration.js";
import FinishTime from "./FinishTime.js";
import StartTime from "./StartTime.js";
import {useState} from 'react';


export default function Time() {
  //const[state,setState]=useState("");
  const[startValue,setStartValue]=useState("2018-01-01T00:00:00.000Z");
  const[finishValue,setFinishValue]=useState("2018-01-01T00:00:00.000Z");
  


  return (
    <Box
      sx={{
        display: "flex", // flex | inline-flex | block-flex
        flexDirection: { xs: "column", sm: "row" },
        flexWrap: "wrap", // wrap | nowrap | wrap-reverse
        alignContent: "stretch", // flex-start | flex-end | center | space-between | space-around | stretch
        justifyContent: "stretch", // flex-start | flex-end | center | space-between | space-around | space-evenly
        alignItems: "stretch", // flex-start | flex-end | center | stretch | baseline
        // flexGrow: "1",
        m: 0, // dis
        p: 0, // ic
        gap: 2, // icindeki componentler arasi
        boxShadow: 12, // max 24
        borderRadius: 2,
        bgcolor: "#B2F0C3",
        color: "#6985B2",
        fontSize: 20,
      }}
    >
      <StartTime startProp={setStartValue}/>
      <FinishTime finishProp={setFinishValue} />
      <Date />
      <Duration startProp={startValue} finishProp={finishValue}/>
    </Box>
  );
}
