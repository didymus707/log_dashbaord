import React from "react";
import { BodyText } from "./typos";
import DatePicker from "react-datepicker";
import {
  Flex,
  Input,
  Select,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "react-datepicker/dist/react-datepicker.css";

type FilterProps = {
  query: string;
  endDate?: Date;
  startDate?: Date;
  result: number[];
  recordsPerPage: number;
  handleFilter: () => void;
  handleReset: () => void;
  setEndDate: (date: Date) => void;
  handleEntry: (event: any) => void;
  setStartDate: (date: Date) => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Filter = (props: FilterProps) => {
  const {
    query,
    result,
    endDate,
    startDate,
    setEndDate,
    handleReset,
    handleEntry,
    setStartDate,
    handleFilter,
    handleSearch,
    recordsPerPage,
  } = props;
  return (
    <Flex w="100%" p="1.5rem 0" align="center">
      <Flex align="center" w="184px" justify="space-between" mr="1rem">
        <BodyText>Show</BodyText>
        <Select
          w="80px"
          variant="filled"
          value={recordsPerPage}
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
        isDisabled={!startDate || !endDate}
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
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </InputGroup>
    </Flex>
  );
};
