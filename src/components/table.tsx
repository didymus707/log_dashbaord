import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { SearchIcon } from "@chakra-ui/icons";
import "react-datepicker/dist/react-datepicker.css";
import { requestConfig } from "../services/client";
import { CustomInput } from "./primitives/customInput";
import Paginate, { PaginateProps } from "./primitives/paginate";

type DataTableProps = {
  list: {}[];
  query: string;
  setList?: any;
  endDate?: Date;
  startDate?: Date;
  setEndDate?: any;
  setStartDate?: any;
  currentPage: number;
  setTotalRecords: any;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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
  } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (event: any) => setQuery(event.target.value);
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

  return (
    <Box>
      <Flex w="100%" p="1rem" align="center">
        <DatePicker
          selectsStart
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          customInput={<CustomInput />}
          placeholderText="Select Date"
          onChange={(date: Date) => setStartDate(date)}
        />
        <DatePicker
          selectsEnd
          endDate={endDate}
          selected={endDate}
          minDate={startDate}
          startDate={startDate}
          customInput={<CustomInput />}
          onChange={(date: Date) => setEndDate(date)}
        />
        <Button
          w="6rem"
          mr="1rem"
          bg="#0267FD"
          color="white"
          loadingText="fetching"
          onClick={handleFilter}
          _hover={{ opacity: 0.8 }}
        >
          Filter
        </Button>
        <Button w="6rem" colorScheme="gray">
          Reset
        </Button>

        <InputGroup width="400px" ml="auto">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </InputGroup>
      </Flex>
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
                  <Th>Date</Th>
                  <Th>Request ID</Th>
                  <Th>Response Code</Th>
                  <Th>Ben. Bank</Th>
                  <Th>Ben. Account Number</Th>
                  <Th>Narration</Th>
                  <Th>Transaction Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {list.map((item: any) => {
                  const {
                    requestId,
                    narration,
                    responseCode,
                    transactionId,
                    beneficiaryBank,
                    transactionAmount,
                    lastModificationTime,
                    beneficiaryAccountNumber,
                  } = item;
                  return (
                    <>
                      <Tr key={requestId}>
                        <Td>
                          {format(new Date(lastModificationTime), "dd-MM-yyy")}
                        </Td>
                        <Td>{requestId}</Td>
                        <Td>{responseCode}</Td>
                        <Td>{beneficiaryBank}</Td>
                        <Td>{beneficiaryAccountNumber}</Td>
                        <Td>{narration}</Td>
                        <Td>{transactionAmount}</Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
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
