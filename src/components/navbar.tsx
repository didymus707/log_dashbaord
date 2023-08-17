import React from "react";
import { FaThLarge } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HamburgerIcon, ChatIcon, Search2Icon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <>
      <Flex p="1.2rem 2rem" borderBottom="1px solid #e1e1e1" align="center">
        <Box className="hamburger">
          <HamburgerIcon color="grey.600" boxSize={6} />
        </Box>
        <Box display={["none", "none"]}>
          <Box>Home</Box>
          <Box>Others</Box>
        </Box>
        <Flex className="other-icons" ml="auto" width={['50%']} justifyContent='space-between'>
          <Search2Icon />
          <ChatIcon />
          <IoIosNotificationsOutline />
          <HiOutlineArrowsExpand />
          <FaThLarge />
        </Flex>
      </Flex>
    </>
  );
};

// bcdbcd;
