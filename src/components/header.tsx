import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Heading2, SmallSubtitle } from "./primitives/typos";

export const DashboardTitle = () => {
  return (
    <Flex wrap="wrap" p="0.8rem 1.2rem" align="center">
      <Heading2 fontWeight="medium">Dashboard</Heading2>
      <Flex wrap="wrap" rowGap="1rem" width={["50%"]}>
        <SmallSubtitle fontWeight="400">
          <Link
            style={styles.active}
            _hover={{ textDecoration: "none", color: "#498cee" }}
          >
            Home
          </Link>{" "}
          / Dashboard v1
        </SmallSubtitle>
      </Flex>
    </Flex>
  );
};

const styles = {
  active: {
    color: "#0267FD",
  },
};
