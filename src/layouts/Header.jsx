import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Logo />
        <Flex color={"#fff"} gap={10}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Projects</Text>
          <Text>Contact</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
