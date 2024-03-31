import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Send } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <Box
    id="contact"
      px={{ lg: 100, md: "90px", sm: 10, base: 10 }}
      py={40}
      mt={{ lg: 100, md: "80px", sm: 0, base: 0 }}
    >
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box width={{ lg: 500, md: 500, sm: "100%", base: "100%" }}>
          <Heading
            fontFamily={"Anton"}
            mb={{ lg: 0, md: 0, sm: 10, base: 10 }}
            fontSize={{ lg: 100, md: "90px", sm: "60px", base: 50 }}
          >
            Let me Handle your Next Project
          </Heading>
        </Box>
        <Box width={{ lg: "30vw", md: "100%", sm: "100%", base : "100%" }} mt={"20px"}>
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
          <Checkbox  pt={5}>
            <Text fontSize={14}>I aggree to the Terms and Condition for Sending mail</Text>
          </Checkbox>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
