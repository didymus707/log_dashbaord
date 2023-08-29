import React from "react";
import { Box, Flex } from "@chakra-ui/react";

export type PaginateProps = {
  currentPage: number;
  totalRecords: number;
  recordsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Paginate = (props: PaginateProps) => {
  const { recordsPerPage, totalRecords, setCurrentPage, currentPage } = props;
  const pageNumbers: number[] = [];
  const lastPage = Math.ceil(totalRecords / recordsPerPage);

  for (let i = 1; i < lastPage; i++) pageNumbers.push(i);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box w="100%">
      <Flex
        as="ul"
        mt="1rem"
        ml="auto"
        mr="1rem"
        gap="12px"
        align="center"
        justify="flex-end"
        listStyleType="none"
      >
        <Box
          as="li"
          rounded="md"
          fontSize="1rem"
          padding="8px 16px"
          background="white"
          onClick={prevPage}
          aria-label="page-button"
          transition="all 0.5s ease"
          color={currentPage === 1 ? "gray" : "#00a8ff"}
          cursor={currentPage === 1 ? "not-allowed" : "pointer"}
          _hover={{
            border: "0px solid #e5e5e5",
            background: "aliceblue",
            color: "#0267FD",
          }}
        >
          Prev
        </Box>
        {pageNumbers.map((pageNum: number) => (
          <>
            <Box
              as="li"
              rounded="md"
              key={pageNum}
              fontSize="1rem"
              color="#00a8ff"
              cursor="pointer"
              padding="8px 16px"
              background="white"
              aria-label="page-button"
              transition="all 0.5s ease"
              onClick={() => paginate(pageNum)}
              _hover={{
                border: "0px solid #e5e5e5",
                background: "aliceblue",
                color: "#0267FD",
              }}
            >
              {pageNum}
            </Box>
          </>
        ))}
        <Box
          as="li"
          rounded="md"
          fontSize="1rem"
          padding="8px 16px"
          onClick={nextPage}
          background="white"
          aria-label="page-button"
          transition="all 0.5s ease"
          color={currentPage === lastPage ? "gray" : "#00a8ff"}
          cursor={currentPage === lastPage ? "not-allowed" : "pointer"}
          _hover={
            currentPage === lastPage
              ? {}
              : {
                  border: "0px solid #e5e5e5",
                  background: "aliceblue",
                  color: "#0267FD",
                }
          }
        >
          Next
        </Box>
      </Flex>
    </Box>
  );
};

export default Paginate;
