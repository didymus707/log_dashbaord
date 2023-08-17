import {
  BoxProps,
  HeadingProps,
  Heading as ChakraHeading,
  Text as ChakraText,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const Title = forwardRef((props: HeadingProps, ref: any) => (
  <ChakraHeading ref={ref} fontSize="4rem" fontWeight="bold" {...props} />
));
Title.displayName = "Title";

export const Heading2 = forwardRef((props: HeadingProps, ref: any) => (
  <ChakraHeading ref={ref} fontSize="2.25rem" fontWeight="bold" {...props} />
));

Heading2.displayName = "Heading2";

export const Heading3 = forwardRef((props: HeadingProps, ref: any) => (
  <ChakraHeading ref={ref} fontSize="1.5rem" fontWeight="bold" {...props} />
));

Heading3.displayName = "Heading3";

export const Subtitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="1.3125rem" fontWeight="bold" {...props} />
));

Subtitle.displayName = "Subtitle";

export const SmallSubtitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="1rem" fontWeight="bold" {...props} />
));

SmallSubtitle.displayName = "SmallSubtitle";

export const BodyText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.875rem" fontWeight="normal" {...props} />
));

BodyText.displayName = "BodyText";

export const SmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.75rem" fontWeight="normal" {...props} />
));

SmallText.displayName = "SmallText";

export const XSmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.6875rem" fontWeight="normal" {...props} />
));

XSmallText.displayName = "XSmallText";

export const XXSmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.5625rem" fontWeight="normal" {...props} />
));

XXSmallText.displayName = "XXSmallText";

export const PreTitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText
    ref={ref}
    fontWeight="bold"
    fontSize="0.625rem"
    textTransform="uppercase"
    {...props}
  />
));

PreTitle.displayName = "PreTitle";
