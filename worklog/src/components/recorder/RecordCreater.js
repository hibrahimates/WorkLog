import { Box } from "@mui/system";
import { default as React } from "react";
import Record from "../record/Record";
import Create from "./Create.js";

// Context API
export const MyContext = React.createContext();

export default function RecordCreater() {
  //
  const ContextProvider = (props) => {
    const [content, setContent] = React.useState("");
    const [project, setProject] = React.useState("");
    const [tag, setTag] = React.useState("");
    const [finishTime, setFinishTime] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [date, setDate] = React.useState("");
    return (
      <MyContext.Provider
        value={
          (content,
          setContent,
          project,
          setProject,
          tag,
          setTag,
          startTime,
          setStartTime,
          finishTime,
          setFinishTime,
          duration,
          setDuration,
          date,
          setDate)
        }
      >
        {props.children}
      </MyContext.Provider>
    );
  };

  return (
    <ContextProvider>
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
        <Record />
        <Create />

      </Box>
    </ContextProvider>
  );
}
