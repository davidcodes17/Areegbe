import { Box, CloseButton, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "FULL STACK DEVELOPER",
    "FRONT-END DEVELOPER",
    "BACK-END DEVELOPER",
    "FULL STACK DEVELOPER",
  ];
  const [text, setText] = useState("FULL STACK DEVELOPER");
  useEffect(() => {
    let count = 0;
    setInterval(() => {
      if (count >= 2) {
        count = 0;
        setText(texts[count]);
      } else {
        count++;
        setText(texts[count]);
      }
    }, 4000);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setDis("block");
      } else {
        setDis("none");
      }
    });
  }, []);
  const [dis, setDis] = useState("block");
  return (
    <Box>
      <Flex justifyContent={"center"} mt={"50px"}>
        <Box bg={"#fff"} width={"fit-content"} borderRadius={100}>
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
            fontFamily={"Anton"}
            px={10}
            py={6}
            borderRadius={400}
          >
            {text}
          </Heading>
        </Box>
      </Flex>
      <Box
        bg={"#000"}
        right={10}
        display={dis}
        cursor={"pointer"}
        width={"fit-content"}
        p={5}
        borderRadius={40}
        pos={"fixed"}
        top={10}
        zIndex={999}
      >
        <Box
          width={"30px"}
          height={"3px"}
          bg={"#fff"}
          my={1}
          borderRadius={40}
        ></Box>
        <Box
          width={"30px"}
          height={"3px"}
          bg={"#fff"}
          my={1}
          borderRadius={40}
        ></Box>
        <Box
          width={"30px"}
          height={"3px"}
          bg={"#fff"}
          my={1}
          borderRadius={40}
        ></Box>
      </Box>
      {/* <Box
        pos={"fixed"}
        as={motion.div}
        // whi={{ width: 0,padding : 0, display : "none" }}
        width={800}
        zIndex={9999}
        height={"100%"}
        top={0}
        right={0}
        borderLeftRadius={50}
        bottom={0}
        p={"100px"}
        bg={"#111"}
      >
        <Box pos={"relative"}>
          <CloseButton pos={'absolute'} right={0} />
          <Heading fontFamily={"Anton"} fontSize={"80px"}>
            Home
          </Heading>
          <Heading fontFamily={"Anton"} pt={5} fontSize={"80px"}>
            About
          </Heading>
          <Heading fontFamily={"Anton"} pt={5} fontSize={"80px"}>
            Projects
          </Heading>
          <Heading fontFamily={"Anton"} pt={5} fontSize={"80px"}>
            Contact
          </Heading>
        </Box>
      </Box> */}
      <Flex justifyContent={"center"}>
        <Image
          src="/circle.svg"
          width={"10%"}
          mt={20}
          className="animate"
          left={0}
          right={0}
        />
      </Flex>
      <Box className="logos">
        <Box className="logo-slide">
          <Image src="/david.svg" />
          <Image src="/david.svg" />
          <Image src="/david.svg" />
          <Image src="/david.svg" />
          <Image src="/david.svg" />
          <Image src="/david.svg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
