import React from "react";
import Vale from "./primitives/icons";
import { Box, Flex } from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <Flex className="sidebar-wrapper" width="250px" direction="column">
      <Box className="logo">
        <Vale color="#0267FD" boxSize={12} />
      </Box>
    </Flex>
  );
};
