import {
  Button,
  LoadingOverlay,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, login } from "../Services/UserService";
import { Signupvalidation } from "../Services/Signupvalidation";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = (props: any) => {
  const [errorform, seterrorform] = useState<{ [key: string]: string }>(form);
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const Navigate = useNavigate();
  const handlechnage = (event: any) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }

    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
    seterrorform({ ...errorform, [name]: Signupvalidation(name, value) });
    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Passwords do not match.";
      seterrorform({
        ...errorform,
        [name]: Signupvalidation(name, value),
        confirmPassword: err,
      });
    }
    if (name == "confirmPassword")
      if (value !== data.password)
        seterrorform({ ...errorform, [name]: "password does not match" });
      else {
        seterrorform({ ...errorform, [name]: "" });
      }
  };

  const handlesubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};
    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = Signupvalidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "Passwors do not match";
      if (newFormError[key]) {
        valid = false;
      }
    }
    seterrorform(newFormError);

    if (valid === true) {
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registrerd Successfully",
            message: "Redirecting to login page 🌟",
            withCloseButton: true,
            icon: <IconX />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            Navigate("/login");
          });
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Error",
            message: " user already existed🌟",
            withCloseButton: true,
            icon: <IconX />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
        });
    }
  };

  return (
    <>
      {" "}
      <div className="w-1/2 sm-mx:py-20 sm-mx:w-full px-20 bs-mx:px-10 md-mx:px-5 flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput
          onChange={handlechnage}
          value={data.name}
          name="name"
          error={errorform.name}
          label="Full Name"
          withAsterisk
          placeholder="Your name"
        />
        <TextInput
          onChange={handlechnage}
          value={data.email}
          name="email"
          error={errorform.email}
          leftSection={<IconAt size={16} />}
          label="Email"
          withAsterisk
          placeholder="Your email"
        />
        <PasswordInput
          onChange={handlechnage}
          value={data.password}
          name="password"
          error={errorform.password}
          leftSection={<IconLock size={16} />}
          label="Password"
          withAsterisk
          placeholder="Password"
        />

        <PasswordInput
          onChange={handlechnage}
          value={data.confirmPassword}
          name="confirmPassword"
          error={errorform.confirmPassword}
          leftSection={<IconLock size={16} />}
          label="Confirm Password"
          withAsterisk
          placeholder="Confirm password"
        />

        <Radio.Group
          value={data.accountType}
          onChange={handlechnage}
          label="You are?"
          withAsterisk
        >
          <div className="flex gap-6 xs-mx:gap-3">
            <Radio
              name="accountType"
              className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 hover:bg-mine-shaft-900 border-mine-shaft-800 border rounded-lg has-[:checked]:!border-bright-sun-400"
              value="Applicant"
              label="Applicant"
            />
            <Radio
              name="accountType"
              className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 hover:bg-mine-shaft-900 border-mine-shaft-800 border rounded-lg has-[:checked]:!border-bright-sun-400"
              value="Employer"
              label="Employer"
            />
          </div>
        </Radio.Group>

        <Button onClick={handlesubmit} autoContrast variant="filled">
          Sign up
        </Button>
        <div className="text-center sm-mx:text-sm xs-mx:text-xs">
          Have an account?{" "}
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer sm-mx:text-sm xs-mx:text-xs"
            onClick={() => {
              Navigate("/Login");
              setData(form);
              seterrorform(form);
            }}
          >
            Login
          </span>{" "}
        </div>
      </div>
    </>
  );
};
export default SignUp;
