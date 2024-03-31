import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Logo />
        <Flex display={{lg : "flex", md : "flex", sm : "none", base : "none"}} color={"#fff"} gap={10}>
          <Text as={Link} data-scroll href="#">Home</Text>
          <Text as={Link} data-scroll href="#about">About</Text>
          <Text as={Link} data-scroll href="#projects">Projects</Text>
          <Text as={Link} data-scroll href="#contact">Contact</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
