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
} from "@chakra-ui/react";
import { CustomInput } from "./primitives/customInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchIcon } from "@chakra-ui/icons";

export const DataTable = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  console.log("object", { startDate, endDate });

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

        <InputGroup width="400px" ml='auto'>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search..." />
        </InputGroup>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Request ID</Th>
              <Th>Response Code</Th>
              <Th>Transaction Amount</Th>
              <Th>Beneficiary Bank</Th>
              <Th>Beneficiary Account Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Rodri</Td>
              <Td>Rodri</Td>
              <Td>200</Td>
              <Td>Declan Rice</Td>
              <Td>Caicedo</Td>
              <Td>Macca</Td>
            </Tr>
            <Tr></Tr>
            <Tr></Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
