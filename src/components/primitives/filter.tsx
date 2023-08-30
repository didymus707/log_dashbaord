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
import { CustomInput } from "./customInput";

type FilterProps = {
  query: string;
  endDate?: Date;
  startDate?: Date;
  result: number[];
  // customInput: ReactNode;
  recordsPerPage: number;
  handleEntry: () => void;
  handleSearch: () => void;
  handleFilter: () => void;
  setEndDate: (date: Date) => void;
  setStartDate: (date: Date) => void;
};

export const Filter = (props: FilterProps) => {
  const {
    query,
    result,
    endDate,
    startDate,
    setEndDate,
    // customInput,
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
        dateFormat="dd - MM - yyyy"
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
      <Button w="6rem" colorScheme="gray" onClick={() => {}}>
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
