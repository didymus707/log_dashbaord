import { Box, Input, BoxProps } from "@chakra-ui/react";
import React from "react";

export const NavbarSearch = (props: BoxProps) => {
  return (
    <Box>
      <Input placeholder="Type something" {...props} />
    </Box>
  );
};
