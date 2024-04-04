import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import axiosClient from "../api/axiosClient";
import ConnectAPI from "../api/connectAPI";

const Connect = () => {
  const handleConnect = async () => {
    
  };

  // const handleDisConnect = async () => {
  //   const response = await ConnectAPI.disconnect();
  //   return response;
  // };
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          onClick={handleConnect}
          style={{
            background: "#56C222",
          }}
        >
          Connect
        </Button>
        <Button
          // onClick={handleDisConnect}
          type="primary"
          icon={<PoweroffOutlined />}
          style={{ background: "#FF010B" }}
        >
          Disconnect
        </Button>
      </Flex>
    </Flex>
  );
};
export default Connect;
