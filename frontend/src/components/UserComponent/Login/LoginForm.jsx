import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import login from "../../../redux/User/Login/login.action";
import { Navigate, useNavigate } from "react-router-dom";

// Login Form Page
const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage, isError, isAuth } = useSelector(
    (store) => store.login,
  );
  const [user, setUser] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    setUser({
      email: "",
      password: "",
    });
  };

  // console.log(isLoading);
  console.log(isAuth);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl textAlign={"center"}>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={handleChange}
            placeholder="Enter Email"
            name="email"
            value={user.email}
            type="email"
          />
          <FormLabel>Password</FormLabel>

          <Input
            onChange={handleChange}
            placeholder="Enter Password"
            name={"password"}
            value={user.password}
            type="password"
          />
          <Button
            isLoading={isLoading}
            bg={"rgba(255, 255, 255, 0.7)"}
            mt={4}
            w={"100%"}
            loadingText={"Submitting"}
            color={"black"}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default LoginForm;
