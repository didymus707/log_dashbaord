import React, { useEffect, useState } from "react";
import { DashboardTitle } from "./header";
import { Boxes } from "./Boxes";
import { DataTable } from "./table";
// import { getTransactions } from "../services/getTransactions";
import axios from "axios";
import Cookies from "js-cookie";
import { Box } from "@chakra-ui/react";

export const Dashboard = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log("env url", process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    setIsLoading(true);
    const fetchTransactions = async () => {
      const response = await axios("api/services/app/Transaction/GetAll", {
        method: "get",
        baseURL: "https://fundtransferservicetest.azurewebsites.net",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": Cookies.get("encryptToken"),
        },
      });
      // console.log(response);
      const {
        data: { data },
      } = response ?? { data: {} };
      setList(data);
      console.log("data", data);
    };
    fetchTransactions();
  }, []);

  return (
    <Box as="main" pb="4rem">
      <DashboardTitle />
      <Boxes />
      <DataTable query={query} setQuery={setQuery} list={list} />
    </Box>
  );
};
