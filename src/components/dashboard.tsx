import axios from "axios";
import { Boxes } from "./Boxes";
import useDebounce from "./hooks";
import { DataTable } from "./table";
import { formatDate } from "../logic";
import { Box, Spinner } from "@chakra-ui/react";
import { DashboardTitle } from "./header";
import React, { useEffect, useState } from "react";
import { requestConfig } from "../services/client";

export const Dashboard = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState();
  const [endDate, setEndDate] = useState<any>();
  const [startDate, setStartDate] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(10);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(5);

  const debounceValue = useDebounce(query, 500);

  useEffect(() => {
    setLoading(true);
    const fetchTransactions = async () => {
      const response = await axios("api/services/app/Transaction/GetAll", {
        ...requestConfig,
        params: {
          page: currentPage,
          PerPage: recordsPerPage,
          FilterValue: debounceValue,
          FronDate: formatDate(startDate),
          ToDate: formatDate(endDate),
        },
      });
      const { data } = response ?? {};
      setTotalRecords(data?.recordsTotal);
      setList(data?.data);
      setLoading(false);
    };
    fetchTransactions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, recordsPerPage, debounceValue]);

  return !!list.length || loading ? (
    <Box as="main" pb="4rem">
      <DashboardTitle />
      <Boxes />
      <DataTable
        list={list}
        query={query}
        endDate={endDate}
        setQuery={setQuery}
        startDate={startDate}
        setEndDate={setEndDate}
        currentPage={currentPage}
        setStartDate={setStartDate}
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        setTotalRecords={setTotalRecords}
        setRecordsPerPage={setRecordsPerPage}
      />
    </Box>
  ) : (
    <Box as="main" pb="4rem">
      <Spinner
        size="xl"
        speed="0.65s"
        display="flex"
        thickness="4px"
        color="#0267FD"
        margin="16rem auto 0"
        emptyColor="gray.200"
      />
    </Box>
  );
};
