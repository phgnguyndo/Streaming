// import { Box } from "@chakra-ui/react";

const VideoStreaming = () => {
  return (
    // <Box width="60%" height="60vh">
      <img 
        
        style={{objectFit:"cover", width:"100%",height:"75vh"}}
        
        // src="http://103.99.244.170:8084/webcapture.jpg?command=snap&channel=1?1710837878"
        src="http://192.168.163.37:8888/restream/rtsp://admin:Admin123@117.4.240.104:8084/Streaming/Channels/101/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></img>
    // </Box>
  );
};

export default VideoStreaming;
