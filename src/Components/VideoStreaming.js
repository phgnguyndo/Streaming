import { Box } from "@chakra-ui/react";

const VideoStreaming = () => {
  return (
    <Box width="60%" height="60vh" >
      <iframe
        width="100%"
        height="300px"
        
        src="http://192.168.234.37:8888/restream/rtsp://admin:Admin123@117.4.240.104:8084/Streaming/Channels/101/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: "none" }}
      ></iframe>
    </Box>
  );
};

export default VideoStreaming;
