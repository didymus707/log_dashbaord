import React from "react";
import { FaThLarge } from "react-icons/fa";
import { Flex, IconButton } from "@chakra-ui/react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { ChatIcon, Search2Icon } from "@chakra-ui/icons";
import { IoMdNotificationsOutline } from "react-icons/io";

export const IconNavs = () => {
  return (
    <Flex
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
  );
};
