import {
  Anchor,
  Button,
  Checkbox,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "..//Services/UserService";
import { loginvalidation } from "../Services/Signupvalidation";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/Slices";
import { notifications } from "@mantine/notifications";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState(form);
  const [errorform, seterrorform] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();

  const handlechnage = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    setdata({ ...data, [name]: value });
    seterrorform({ ...errorform, [name]: loginvalidation(name, value) });
  };

  const handlesubmit = () => {
    login(data)
      .then((res) => {
        console.log(res);
        dispatch(setUser(res));
        navigate("/");
      })
      .catch((err) => {
        notifications.show({
          title: "Error",
          message: "user does not exist🌟",
          withCloseButton: true,
          icon: <IconX />,
          color: "teal",
          withBorder: true,
          className: "!border-green-500",
        });
        console.log(err);
      });
  };
  return (
    <>
      {" "}
      <div
        data-aos="zoom-out"
        className="w-1/2 sm-mx:w-full px-20  bs-mx:px-10 md-mx:px-5  flex flex-col gap-3 justify-center"
      >
        <div className="text-2xl font-semibold">Login</div>
        <TextInput
          error={errorform.email}
          onChange={handlechnage}
          name="email"
          value={data.email}
          leftSection={<IconAt size={16} />}
          label="Email"
          withAsterisk
          placeholder="Your email"
        />
        <PasswordInput
          error={errorform.password}
          onChange={handlechnage}
          name="password"
          value={data.password}
          leftSection={<IconLock size={16} />}
          label="Password"
          withAsterisk
          placeholder="Password"
        />
        <Button onClick={handlesubmit} autoContrast variant="filled">
          Login
        </Button>
        <div className="text-center sm-mx:text-sm xs-mx:text-xs">
          Don't have an account?{" "}
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/Sign-up");
              seterrorform(form);
              setdata(form);
            }}
          >
            Sign Up
          </span>{" "}
        </div>
      </div>
    </>
  );
};
export default Login;
