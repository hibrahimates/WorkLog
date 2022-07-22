import "./App.css";
import Recorder from "./components/recorder/Recorder.js";
import Lister from "./components/lister/Lister.js";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <Recorder />
      <Lister />
    </Box>
  );
}

export default App;
