"use client";
import { Form, Input, Button } from "antd";
import { LoginUser } from "@/app/lib/types/types";
import Image from "next/image";
import MangogiIcon from "@/public/mangogi-icon.png";
import Mangogi from "@/public/mangogi-svg.svg";
import Link from "next/link";
import config from "@/app/lib/config/config";
import { setCookie } from "cookies-next";

const LoginForm = () => {
  const loginHandler = async (values: LoginUser) => {
    try {
      const { data } = await config
        .axiosHandle()
        .post("http://localhost:8080/Api/V1/Auth/Login", values);
      console.log(data);
      console.log("OKKKKKKKKKKK");
      setCookie("mangogi", data.token);
      window.location.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className={
        "flex flex-row-reverse bg-[#ffe269]/30 sm:bg-white justify-center items-center h-[100vh]"
      }
    >
      <div className={"hidden sm:block w-full opacity-60"}>
        <Image src={Mangogi} alt={"Mangogi"} className={"mt-10"} />
      </div>
      <div
        className={
          "flex flex-col  justify-center items-center sm:w-6/12 fixed ml-4 -mt-20"
        }
      >
        <Image
          src={MangogiIcon}
          alt={"MangoGi Icon"}
          width={130}
          height={130}
        />
        <Form
          name={"basic"}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          className={"w-full"}
          onFinish={loginHandler}
          onFinishFailed={onFinishFailed}
          style={{
            marginTop: "-10px",
          }}
        >
          <Form.Item<LoginUser>
            label={"Email"}
            name={"email"}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<LoginUser>
            label={"Password"}
            name={"password"}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button type={"primary"} htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link href={"/register"}>
          Hey Happy Developer!
          <span className={"ml-1 items-center text-[#eab308]"}>JOIN us</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
