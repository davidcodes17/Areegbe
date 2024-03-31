import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box pb={100} id="about">
      <Heading
        fontSize={{lg : 100, md : 90, sm : "70px", base : '40px'}}
        fontFamily={"Anton"}
        pb={5}
      >
        About Me
      </Heading>
      <Text fontSize={{lg : 15, md : 15, sm : 12, base : 12}} width={"full"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt,
        tenetur consequuntur in numquam reiciendis animi optio hic pariatur, ab
        alias. Aperiam incidunt eos maiores est saepe excepturi nulla maxime!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt,
       </Text>
    </Box>
  );
};

export default About;
