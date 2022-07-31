import "./App.css";
import RecordCreater from "./components/recorder/RecordCreater.js";
import RecordLister from "./components/lister/RecordLister.js";
import { Box } from "@mui/system";
import { AppBar,Toolbar } from "@mui/material";


function App() {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar variant="text">
          <RecordCreater />
        </Toolbar>
      </AppBar>
      <RecordLister />
    </Box>
  );
}

export default App;
