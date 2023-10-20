"use client";
import useForm from "antd/es/form/hooks/useForm";
import { Form, Input } from "antd";

export default function Register() {
  const [form] = useForm();
  const onFinish = () => {
    return console.log("it works");
  };
  return (
    <div className={"bg-amber-200 p-3 mt-6 flex flex-col justify-center"}>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        style={{
          marginTop: "20px",
        }}
      >
        <Form.Item
          label={"Email"}
          name={"email"}
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Name"} name={"name"}>
          <Input />
        </Form.Item>
        <Form.Item
          label={"User Name"}
          name={"username"}
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Password"}
          name={"password"}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={"Confirm Password"}
          name={"confirm"}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!"),
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={"Field"} name={"field"}>
          <Input />
        </Form.Item>
        <Form.Item label={"Stack"} name={"stack"}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
