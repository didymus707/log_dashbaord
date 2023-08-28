import React from "react";
import { Login } from "./login";
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
