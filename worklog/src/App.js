import "./App.css";
import RecordCreater from "./components/recorder/RecordCreater.js";
import RecordLister from "./components/lister/RecordLister.js";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <RecordCreater />
      <RecordLister />
    </Box>
  );
}

export default App;
