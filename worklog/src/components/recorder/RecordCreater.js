import { Box } from "@mui/system";
import { default as React } from "react";
import { RecordContextProvider } from "../RecordContext";
import Record from "../record/Record";
import Create from "./Create.js";

export default function RecordCreater() {

  return (
    <RecordContextProvider>
      <Box

      //position="fixed"
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

          bgcolor: "#F3D9B4",
          color: "#6985B2",
          fontSize: 20,
        }}
      >
        <Record />
        <Create />
      </Box>
    </RecordContextProvider>
  );
}
