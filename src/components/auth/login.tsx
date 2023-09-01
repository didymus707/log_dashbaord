import {
  Box,
  Input,
  Button,
  useToast,
  FormLabel,
  Container,
  FormControl,
  // FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Subtitle } from "../primitives/typos";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async () => {
    const formData = {
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: true,
    };
    setIsLoading(true);
    try {
      const {
        data: { result },
      } = await axios.post(
        "https://fundtransferservicetest.azurewebsites.net/api/v1/bankservices/Authenticate",
        formData
      );
      setIsLoading(false);
      console.log(result);
      const { accessToken, encryptedAccessToken } = result;
      if (!accessToken) {
        toast({
          title: "Unable to log in, pls try again later",
          status: "info",
        });
        return;
      }
      setUsername("");
      setPassword("");
      Cookies.set("token", accessToken);
      Cookies.set("encryptToken", encryptedAccessToken);
      navigate("/dashboard");
    } catch (error: any) {
      const {
        error: { message },
      } = error;
      setIsLoading(false);
      toast({
        title: message,
        status: "error",
      });
      console.log("error", error);
    }
  };

  return (
    <Box margin="0 auto" pt="7rem">
      <Container>
        <Subtitle>Log in to access your dashboard</Subtitle>
        <form onSubmit={event => event.preventDefault()}>
          <FormControl mt="1.6rem">
            <FormLabel>Username/Email</FormLabel>
            <Input type="text" value={username} onChange={handleUsername} />
          </FormControl>
          <FormControl my="1.6rem">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={handlePassword} />
          </FormControl>
          <Button
            width="100%"
            type="submit"
            bg="#0267FD"
            color="white"
            isLoading={isLoading}
            onClick={handleSubmit}
            loadingText="Submitting"
            _hover={{ opacity: "0.6" }}
            isDisabled={!(username && password)}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

// <FormHelperText>We'll never share your email.</FormHelperText>
