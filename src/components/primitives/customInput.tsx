import { Button } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <Button
    ref={ref}
    rounded="md"
    bg="#ececec"
    width="160px"
    onClick={onClick}
    marginRight="2rem"
    border="1px solid #bfbfbf"
  >
    {value}
  </Button>
));
