import { Box } from "@chakra-ui/react";
import Home from "./Pages/Home";
import VideoStreaming from "./Components/VideoStreaming";
import Layout from "./Components/OverView.js";
import OverView from "./Components/OverView.js";

function App() {
  return (
    <Box
    >
      <OverView></OverView>
      {/* <VideoStreaming></VideoStreaming> */}
    </Box>
  );
}

export default App;
