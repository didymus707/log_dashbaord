import React, { useState } from "react";
import {
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  // TableCaption,
  Input,
  Button,
  Select,
  Spinner,
  InputGroup,
  TableContainer,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import { entryBits } from "../logic";
import DatePicker from "react-datepicker";
import { SearchIcon } from "@chakra-ui/icons";
import { BodyText } from "./primitives/typos";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css';
import { requestConfig } from "../services/client";
import Paginate, { PaginateProps } from "./primitives/paginate";
// import { Filter } from "./primitives/filter";

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
    setQuery('');
    setEndDate();
    setStartDate();
  }

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
      {/* <Filter query={query} endDate={endDate} startDate={startDate} result={result} customInput={<CustomInput />} recordsPerPage={recordsPerPage} handleEntry={handleEntry} handleSearch={handleSearch} handleFilter={handleFilter} /> */}
      <Flex w="100%" p="1.5rem 0" align="center">
        <Flex align="center" w="184px" justify="space-between" mr="1rem">
          <BodyText>Show</BodyText>
          <Select
            w="80px"
            value={recordsPerPage}
            variant="filled"
            onChange={handleEntry}
          >
            {result.map((bit: number, index: number) => (
              <option key={index} value={bit}>
                {bit}
              </option>
            ))}
          </Select>
          <BodyText>Entries</BodyText>
        </Flex>
        <DatePicker
          selectsStart
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          dateFormat="dd - MM - yyyy"
          wrapperClassName="datePicker"
          placeholderText="Select Date From"
          onChange={(date: Date) => setStartDate(date)}
        />
        <DatePicker
          selectsEnd
          endDate={endDate}
          selected={endDate}
          minDate={startDate}
          startDate={startDate}
          dateFormat="dd - MM - yyyy"
          wrapperClassName="datePicker"
          placeholderText="Select Date To"
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
        <Button w="6rem" colorScheme="gray" onClick={handleReset}>
          Reset
        </Button>

        <InputGroup width="400px" ml="auto">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="search"
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
                      <Tr key={transactionId}>
                        <Td>
                          {format(
                            new Date(lastModificationTime),
                            "MMM dd, yyy HH:mm"
                          )}
                        </Td>
                        <Td>{requestId}</Td>
                        <Td textAlign="center">{responseCode}</Td>
                        <Td>{beneficiaryBank}</Td>
                        <Td>{beneficiaryAccountNumber}</Td>
                        <Td>{narration}</Td>
                        <Td textAlign="center">{`\u20A6${transactionAmount.toFixed(
                          2
                        )}`}</Td>
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
