import CreateRecordButton from "./CreateRecordButton.js";
import { Box } from "@mui/system";
import Record from "../record/Record";
import React from "react";


export default function RecordCreater() {
  const [content, setContent] = React.useState("");
    

  return (
    <Box
      sx={{
        display: "flex", // flex | inline-flex | block-flex
        flexDirection: { xs: "column", sm: "row" },
        flexWrap: "wrap", // wrap | nowrap | wrap-reverse
        alignContent: "stretch", // flex-start | flex-end | center | space-between | space-around | stretch
        justifyContent: "stretch", // flex-start | flex-end | center | space-between | space-around | space-evenly
        alignItems: "stretch", // flex-start | flex-end | center | stretch | baseline
        m: 1, // dis
        p: 1, // ic
        gap: 2, // icindeki componentler arasi
        boxShadow: 12, // max 24
        borderRadius: 2,

        bgcolor: "#B2F0C3",
        color: "#6985B2",
        fontSize: 20,
      }}
    >
      <Record  recordContentProp={setContent} />
      <CreateRecordButton createButtonProp={content}/>
    </Box>
  );
}

