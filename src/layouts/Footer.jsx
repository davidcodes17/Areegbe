import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Send } from "iconsax-react";
import React, { useState } from "react";

const Footer = () => {
  const [form, setForm] = useState({
    subject: "",
    body: "",
  });
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
        <Box
          width={{ lg: "30vw", md: "100%", sm: "100%", base: "100%" }}
          mt={"20px"}
        >
          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input
              value={form.subject}
              onChange={(e) => {
                setForm({ ...form, subject: e.target.value });
              }}
              width={"100%"}
              placeholder="Role of a Software Developer"
              fontSize={12}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={form.body}
              onChange={(e) => {
                setForm({ ...form, body: e.target.value });
              }}
              width={"100%"}
              placeholder="Message..."
              fontSize={12}
            />
          </FormControl>
          <Link
            href={`mailto:areegbedavid@gmail.com?subject=${form.subject}&body=${form.body}`}
          >
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
          </Link>
          <Text pt={4} textAlign={"center"}>&copy; All rights reserved Areegbe David</Text>
          {/* <Checkbox pt={5}>
            <Text fontSize={14}>
              I aggree to the Terms and Condition for Sending mail
            </Text>
          </Checkbox> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
