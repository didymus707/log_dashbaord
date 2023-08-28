import React from "react";
import Vale from "./primitives/icons";
import { IconNavs } from "./iconNavs";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

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
        <Box ml="auto">{pathname === "/" ? <LogInButton /> : <IconNavs />}</Box>
      </Flex>
    </>
  );
};

const LogInButton = () => (
  <Button variant="ghost" _hover={{ bg: "none", color: "#0267FD" }}>
    <Link to="/">Sign in/Register</Link>
  </Button>
);

// bcdbcd;
// #0267FD
// <Button><Link to='/login'>Sign in/Register</Link></Button>
// <Link to='/login'>Sign in/Register</Link>
