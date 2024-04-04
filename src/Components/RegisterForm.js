import React from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import userAPI from "../api/userAPI";
import { useNavigate } from "react-router";
import { Box } from "@chakra-ui/react";
import MTA from "../images/MTA.jpg";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const RegisterForm = () => {
  const nav = useNavigate();

  const onFinish = async (values) => {
    try {
      const dataToSend = {
        username: values.username,
        password: values.password
      };
      // console.log(dataToSend);
      const response = await userAPI.register(dataToSend);
      console.log(response);
      alert("Đăng kí thành công!");
    //   localStorage.setItem("username", response.username);
      nav("/login");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Box
      w={"100%"}
      height={"100vh"}
      bgImage={MTA}
    >
      <Box
        position={"absolute"}
        w={"450px"}
        height={"240px"}
        bg={"white"}
        left={"35%"}
        top={"30vh"}
        borderRadius={"10px"}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            position: "relative",
            width: "80%",
            height: "100%",
            // backgroundColor: "red",
            left: 25,
            top: 20,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="RePassword"
            name="repassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </Box>
  );
};
export default RegisterForm;
