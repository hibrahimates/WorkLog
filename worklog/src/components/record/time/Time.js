import { Box } from "@mui/system";
import Date from "./Date.js";
import Duration from "./Duration.js";
import FinishTime from "./FinishTime.js";
import StartTime from "./StartTime.js";

//export const NONE =  new Date() ; // TODO: munal: burada bir sikinti var

export default function Time() {

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
        //bgcolor: "#B2F0C3",
        color: "#6985B2",
        fontSize: 20,
      }}
    >
      <StartTime />
      <FinishTime />
      <Date />
      <Duration />
    </Box>
  );
}