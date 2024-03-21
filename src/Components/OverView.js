import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import VideoStreaming from "./VideoStreaming";
import Connect from "./Button";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { UserOutlined } from "@ant-design/icons";
import logo from "../images/logo1.jpg";

const { Header, Content, Footer } = Layout;
const storedUsername = localStorage.getItem("username");

// const items = [
//   { key: 1, label: "Home" },
//   { key: 2, label: "Login" },
//   { key: 3, label: "Register" },
// ];

const OverView = () => {
  const nav = useNavigate();
  const handleMenuClick = (key) => {
    switch (key) {
      case "1":
        nav("/home");
        break;
      case "2":
        nav("/login");
        break;
      case "3":
        nav("/register");
        break;
      default:
        break;
    }
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          onClick={({ key }) => handleMenuClick(key)} // Gọi hàm handleMenuClick khi một mục trong menu được nhấp vào
          style={{ flex: 1, minWidth: 0 }}
        >
          <Image
            src={logo}
            w={"100px"}
            h={"63.8px"}
            bg={"none"}
            borderRadius={"4px"}
          ></Image>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Register</Menu.Item>
          <Menu.Item key="4" style={{ left: "1000px" }}>
            <UserOutlined style={{ position: "relative", right: "10px" }} />
            {storedUsername}
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "75vh",
            padding: 0,
            borderRadius: borderRadiusLG,
          }}
        >
          <Box
            width={"70%"}
            height={"75vh"}
            bg={"beige"}
            float={"left"}
            borderLeftRadius={"10px"}
            overflow={"hidden"}
          >
            <VideoStreaming />
          </Box>
          <Box
            width={"30%"}
            height={"75vh"}
            bg={"bisque"}
            float={"right"}
            borderRightRadius={"10px"}
          >
            <Box position={"relative"} left={"25%"} top={"5%"}>
              <Connect />
            </Box>
          </Box>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default OverView;
