import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BankBox } from "./primitives/BankBox";

export const Boxes = () => {
  return (
    <Box p="0.8rem 1.2rem">
      <Flex wrap="wrap" rowGap="0.7rem" justify="space-between">
        <BankBox
          title="150"
          topBg="#147989"
          sub="New Orders"
          name="More Info"
          bottomBg="#0000001a"
        />
        <BankBox
          title="150"
          topBg="#207D33"
          sub="New Orders"
          name="More Info"
          bottomBg="#0000001a"
        />
        <BankBox
          title="150"
          topBg="#BE8F0F"
          sub="New Orders"
          name="More Info"
          bottomBg="#0000001a"
        />
        <BankBox
          title="150"
          topBg="#A42833"
          sub="New Orders"
          name="More Info"
          bottomBg="#0000001a"
        />
      </Flex>
    </Box>
  );
};
