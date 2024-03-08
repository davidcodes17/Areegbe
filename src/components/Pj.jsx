import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Global } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Pj = ({ justifyContent, name, des, git, link, img }) => {
  return (
    <Flex
      justifyContent={justifyContent}
      transform={"translateX(-200px)"}
      opacity={0}
      as={motion.div}
      scale={0}
      whileInView={{
        transform: "translateX(0px)",
        opacity: 1,
        transition: {
          duration: 1,
          type: "tween",
          stiffness: 30000,
        },
      }}
    >
      <Box py={40}>
        <Image
          src={img}
          borderRadius={10}
          width={"800px"}
          height={"400px"}
          objectFit={"fill"}
        />
        <Box py={5} width={600}>
          <Heading fontSize={60} fontWeight={400} fontFamily={"Anton"}>
            {name}
          </Heading>
          <Text>{des}</Text>
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
