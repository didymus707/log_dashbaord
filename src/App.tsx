import * as React from "react";
import { Navbar } from "./components/navbar";
import { Login } from "./components/auth/login";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
// import { LandingPage } from "./components/landing";
import { ChakraProvider, theme } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <nav>
      <Navbar />
    </nav>
    <Routes>
      <Route index path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    
  </ChakraProvider>
);

// TODO: Add CSV and PDF download functionality