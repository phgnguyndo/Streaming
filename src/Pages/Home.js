import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <iframe
        width="1080"
        height="720"
        src="http://192.168.234.37:8888/restream/rtsp://admin:Admin123@117.4.240.104:8084/Streaming/Channels/101/"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Box>
  );
};
export default Home;
