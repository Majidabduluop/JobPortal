import { Switch } from "@mantine/core";

export const Signupvalidation = (name: string, value: string) => {
  switch (name) {
    case "name":
      if (value.length === 0) return "Name is required.";
      return "";

    case "email":
      if (value.length === 0) return "email is required";
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
        return "Email is invalid";
      return "";

    case "password":
      if (value.length === 0) return "password is required";
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
          value
        )
      )
        return "password is invalid";
      return "";

    default:
      return "";
  }
};

export const loginvalidation = (name: string, value: string) => {
  switch (name) {
    case "email":
      if (value.length === 0) return "email is required";
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
        return "email is invalid";
      return "";
    case "password":
      if (value.length === 0) return "password is required";
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
          value
        )
      )
        return "password is invalid";
      return "";

    default:
      return "";
  }
};
