import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Global } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Pj = ({ justifyContent, name, des, git, link, img }) => {
  return (
    <Flex
      justifyContent={{
        lg: justifyContent,
        md: justifyContent,
        sm: "center",
        base: "center",
      }}
      transform={{
        lg: "translateX(-200px)",
        md: "translateX(-100px)",
        sm: "translateX(00px)",
        base: "translateX(00px)",
      }}
      opacity={0}
      as={motion.div}
      // scale={0}
      whileInView={{
        transform: "translateX(0px)",
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
          type: "tween",
          stiffness: 30000,
        },
      }}
    >
      <Box py={{lg :40, md : 40, sm : 20, base : 20}}>
        <Image
          src={img}
          borderRadius={10}
          width={{ lg: "800px", md: "700px", sm: "500px", base: "100%" }}
          height={{ lg: "400px", md: "400px", sm: "300px", base: "300px" }}
          objectFit={{ lg: "fill", md: "contain", sm: "contain", base: "contain" }}
          bgPos={"center"}
        />
        <Box py={5} width={{ lg: 600, md: 500, sm: "100%", base: "100%" }}>
          <Heading
            fontSize={{ lg: 60, md: 50, sm: 40, base: 40 }}
            fontWeight={400}
            fontFamily={"Anton"}
          >
            {name}
          </Heading>
          <Text fontSize={{ lg: 15, md: 15, sm: 12, base: 12 }}>{des}</Text>
          <Flex mt={5} alignItems={"center"} gap={5}>
            <Link to={link}>
              <Button
                p={6}
                borderRadius={40}
                leftIcon={<Global />}
                bg={"linear-gradient(45deg,tomato,darkorchid)"}
                color={"#fff"}
                _hover={"none"}
              >
                Live Preview
              </Button>
            </Link>
            <Link to={git}>
              <Image
                src="/git.png"
                width={"50px"}
                borderRadius={40}
                height={"50px"}
                bg={"linear-gradient(45deg,tomato,darkorchid)"}
                p={1}
              />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Pj;
