import { Box } from "@chakra-ui/react";

const VideoStreaming = () => {
  return (
    <Box width="100%" height="100vh">
      <iframe 
        width="100%"
        height="100%"
        style={{"object-fit": "cover !important"}}
        
        src="http://192.168.163.37:8888/restream/rtsp://admin:Admin123@117.4.240.104:8084/Streaming/Channels/101/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VideoStreaming;
