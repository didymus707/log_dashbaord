import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BodyText, SmallText, Subtitle } from "./typos";

type BankBoxProps = {
  title: string;
  sub: string;
  name: string;
  topBg: string;
  bottomBg: string;
};

export const BankBox = (props: BankBoxProps) => {
  const { title, sub, name, topBg, bottomBg } = props;
  return (
    <Flex
      bg={topBg}
      rounded="md"
      width="48.4%"
      color="white"
      height="136px"
      align="center"
      justify="center"
      direction="column"
    >
      <Box textAlign="center" pt="1rem">
        <Subtitle>{title}</Subtitle>
        <SmallText mt="0.5rem">{sub}</SmallText>
      </Box>
      <Box width="100%" bg={bottomBg} py="0.5rem" mt="auto" textAlign="center">
        <BodyText>{name}</BodyText>
      </Box>
    </Flex>
  );
};
