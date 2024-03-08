import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Send } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <Box px={100} py={40} mt={100}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box width={500}>
          <Heading fontFamily={"Anton"} fontSize={100}>
            Let me Handle your Next Project
          </Heading>
        </Box>
        <Box width={"30vw"}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input width={"100%"} placeholder="you@gmail.com" fontSize={12} />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Message</FormLabel>
            <Textarea width={"100%"} placeholder="Message..." fontSize={12} />
          </FormControl>
          <Button
            rightIcon={<Send />}
            bg={"tomato"}
            color={"#fff"}
            fontWeight={300}
            width={"100%"}
            mt={5}
            py={7}
            _hover={"none"}
          >
            Send Message
          </Button>
          <Checkbox fontSize={12} pt={5}>I aggree to the Terms and Condition for Sending mail</Checkbox>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
