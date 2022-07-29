import { Box } from "@mui/system";
import React from "react";
import Content from "./Content.js";
import Project from "./Project.js";
import Tag from "./Tag.js";
import Time from "./time/Time.js";

export default function Record({
  recordContentProp,
  recordProjectProp,
  tagProp,
}) {
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
      <Content contentProp={recordContentProp} />
      <Project projectProp={recordProjectProp} />
      <Tag  />
      <Time />
    </Box>
  );
}
