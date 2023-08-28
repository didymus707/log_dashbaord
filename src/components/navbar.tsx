import React from "react";
import Vale from "./primitives/icons";
import { FaThLarge } from "react-icons/fa";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ChatIcon, Search2Icon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <>
      <Flex p="1rem 1.2rem" borderBottom="1px solid #e1e1e1" align="center">
        <Box className="vale" m="-2rem 0">
          <Vale color="#0267FD" boxSize={16} />
        </Box>
        <Box display={["none", "none"]}>
          <Box>Home</Box>
          <Box>Others</Box>
        </Box>
        <Flex
          ml="auto"
          width="13rem"
          className="other-icons"
          justifyContent="space-between"
        >
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<Search2Icon color="#838383" />}
            onClick={() => console.log("I just got clicked")}
          />
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<ChatIcon color="#838383" />}
          />
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<IoMdNotificationsOutline size={18} color="#838383" />}
          />
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<HiOutlineArrowsExpand color="#838383" />}
          />
          <IconButton
            isRound={true}
            variant="ghost"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<FaThLarge color="#838383" />}
          />
        </Flex>
      </Flex>
    </>
  );
};

// bcdbcd;
// #0267FD
