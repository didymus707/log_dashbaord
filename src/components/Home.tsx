import React from "react";
import { Login } from "./auth/login";
import { Box, Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex>
      <Box></Box>
      <Box>
        <Login />
      </Box>
    </Flex>
  );
};
