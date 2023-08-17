import * as React from "react";
import { Navbar } from "./components/navbar";
import { DashboardTitle } from "./components/header";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Boxes } from "./components/Boxes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <nav>
      <Navbar />
    </nav>
    <main>
      <DashboardTitle />
      <Boxes />
    </main>
  </ChakraProvider>
);
