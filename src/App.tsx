import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <nav>
      <Navbar />
    </nav>
  </ChakraProvider>
);
