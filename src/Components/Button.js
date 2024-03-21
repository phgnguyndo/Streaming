import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const Connect = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          style={{
            background: "#56C222",
            // hover: {
            //   background: "#1A73E8",
            // },
          }}
        >
          {/* loading={loadings[0]} onClick={() => enterLoading(0)}> */}
          Connect
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          style={{background:"#FF010B"}}
          // loading={loadings[1]}
          // onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
      </Flex>
    </Flex>
  );
};
export default Connect;
