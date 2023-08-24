import React from "react";
import Vale from "./primitives/icons";
import { FaThLarge } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HamburgerIcon, ChatIcon, Search2Icon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <>
      <Flex p="1rem 1.2rem" borderBottom="1px solid #e1e1e1" align="center">
        <Box className="hamburger">
          {/* <HamburgerIcon color="grey.600" boxSize={6} /> */}
          <Vale color="#0267FD" boxSize={12} />
        </Box>
        <Box display={["none", "none"]}>
          <Box>Home</Box>
          <Box>Others</Box>
        </Box>
        <Flex
          ml="auto"
          width="238px"
          className="other-icons"
          justifyContent="space-between"
        >
          <Search2Icon color="#838383" />
          <ChatIcon color="#838383" />
          <IoMdNotificationsOutline size={18} color="#838383" />
          <HiOutlineArrowsExpand color="#838383" />
          <FaThLarge color="#838383" />
        </Flex>
      </Flex>
    </>
  );
};

// bcdbcd;
// #0267FD
