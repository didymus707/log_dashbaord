import React, { useState } from "react";
import {
  Tr,
  Th,
  Td,
  Box,
  Table,
  Thead,
  Tbody,
  Spinner,
  TableContainer,
} from "@chakra-ui/react";
import "./datepicker.css";
import axios from "axios";
import { format } from "date-fns";
import { entryBits } from "../logic";
import { Filter } from "./primitives/filter";
import { requestConfig } from "../services/client";
import Paginate, { PaginateProps } from "./primitives/paginate";
import { Subtitle } from "./primitives/typos";

type DataTableProps = {
  list: {}[];
  query: any;
  setList?: any;
  endDate?: Date;
  startDate?: Date;
  setEndDate?: any;
  setStartDate?: any;
  currentPage: number;
  setQuery: React.Dispatch<React.SetStateAction<any>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalRecords: React.Dispatch<React.SetStateAction<number>>;
  setRecordsPerPage: React.Dispatch<React.SetStateAction<number>>;
} & PaginateProps;

export const DataTable = (props: DataTableProps) => {
  const {
    list,
    query,
    endDate,
    setList,
    setQuery,
    startDate,
    setEndDate,
    currentPage,
    totalRecords,
    setStartDate,
    recordsPerPage,
    setCurrentPage,
    setTotalRecords,
    setRecordsPerPage,
  } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleEntry = (event: any) => {
    setRecordsPerPage(event.target.value);
  };

  const handleReset = () => {
    setQuery("");
    setEndDate();
    setStartDate();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const handleFilter = async () => {
    setLoading(true);
    try {
      const response = await axios("api/services/app/Transaction/GetAll", {
        ...requestConfig,
        params: {
          FromDate: startDate,
          ToDate: endDate,
        },
      });
      const { data } = response ?? {};
      console.log("response", response);
      setTotalRecords(data?.recordsTotal);
      setList(data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const result = entryBits(totalRecords);

  return (
    <Box p="0.8rem 1.2rem">
      <Filter
        query={query}
        result={result}
        endDate={endDate}
        startDate={startDate}
        setEndDate={setEndDate}
        handleReset={handleReset}
        handleEntry={handleEntry}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        setStartDate={setStartDate}
        recordsPerPage={recordsPerPage}
      />
      {loading ? (
        <Box as="div">
          <Spinner
            size="xl"
            speed="0.65s"
            display="flex"
            thickness="4px"
            color="#0267FD"
            margin="2rem auto 0"
            emptyColor="gray.200"
          />
        </Box>
      ) : (
        <>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th textAlign="center">Date</Th>
                  <Th textAlign="center">Request ID</Th>
                  <Th textAlign="center">Response Code</Th>
                  <Th textAlign="center">Ben. Bank</Th>
                  <Th textAlign="center">Ben. Account Number</Th>
                  <Th textAlign="center">Status</Th>
                  <Th textAlign="center">Transaction Amount</Th>
                </Tr>
              </Thead>
              {!!list.length && (
                <Tbody>
                  {list.map((item: any) => {
                    const {
                      id,
                      status,
                      requestId,
                      // narration,
                      responseCode,
                      beneficiaryBank,
                      transactionAmount,
                      lastModificationTime,
                      beneficiaryAccountNumber,
                    } = item;
                    return (
                      <>
                        <Tr key={id}>
                          <Td textAlign="center">
                            {format(
                              new Date(lastModificationTime),
                              "MMM dd, yyy HH:mm"
                            )}
                          </Td>
                          <Td textAlign="center">{requestId}</Td>
                          <Td textAlign="center">{responseCode}</Td>
                          <Td textAlign="center">{beneficiaryBank}</Td>
                          <Td textAlign="center">{beneficiaryAccountNumber}</Td>
                          <Td textAlign="center">{status}</Td>
                          <Td textAlign="center">{`\u20A6${transactionAmount.toFixed(
                            2
                          )}`}</Td>
                        </Tr>
                      </>
                    );
                  })}
                </Tbody>
              )}
            </Table>
          </TableContainer>
          {list.length === 0 && (
            <Subtitle py="4rem" textAlign="center">
              No Record Found
            </Subtitle>
          )}
          <Paginate
            currentPage={currentPage}
            totalRecords={totalRecords}
            setCurrentPage={setCurrentPage}
            recordsPerPage={recordsPerPage}
          />
        </>
      )}
    </Box>
  );
};
