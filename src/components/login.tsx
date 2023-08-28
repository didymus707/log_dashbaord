import {
  Box,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { Subtitle } from "./primitives/typos";

export const Login = () => {
  return (
    <Box>
      <Subtitle>Log in to access your dashboard</Subtitle>
      <FormControl>
        <FormLabel>Username/Email</FormLabel>
        <Input type="email" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="email" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <Button type="submit">Submit</Button>
    </Box>
  );
};
