import React, { SetStateAction } from "react";
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
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { SearchIcon } from "@chakra-ui/icons";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./primitives/customInput";

type DataTableProps = {
  query: string;
  endDate?: Date;
  startDate?: Date;
  setStartDate?: any;
  setEndDate?: any;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  list: {}[];
};

export const DataTable = (props: DataTableProps) => {
  const {
    query,
    endDate,
    startDate,
    setStartDate,
    setEndDate,
    setQuery,
    list,
  } = props;

  const handleSearch = (event: any) => setQuery(event.target.value);

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
        <Button w="6rem" bg="#0267FD" mr="1rem" color="white">
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
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Request ID</Th>
              <Th>Response Code</Th>
              <Th>Ben. Bank</Th>
              <Th>Ben. Account Number</Th>
              <Th>Narration</Th>
              {/* <Th>Transaction Amount</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {list.map((item: any) => {
              const {
                requestId,
                narration,
                responseCode,
                beneficiaryBank,
                lastModificationTime,
                beneficiaryAccountNumber,
              } = item;
              return (
                <>
                  <Tr>
                    <Td>
                      {format(new Date(lastModificationTime), "dd/MM/yyy")}
                    </Td>
                    {/* <Td>{format(lastModificationTime, 'dd/MM/yyy')}</Td> */}
                    <Td>{requestId}</Td>
                    <Td>{responseCode}</Td>
                    <Td>{beneficiaryBank}</Td>
                    <Td>{beneficiaryAccountNumber}</Td>
                    <Td>{narration}</Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
