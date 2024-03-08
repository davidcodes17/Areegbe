import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Pj from "../components/Pj";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <Box
      bg={"#111"}
      borderRadius={10000000}
      as={motion.div}
      whileInView={{
        borderRadius: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      color={"#fff"}
      px={50}
      py={100}
    >
      <Heading fontFamily={"Anton"} fontSize={100} px={10}>
        Projects
      </Heading>
      <Box mt={10}>
        <Pj
          img={"/img.png"}
          name={"POSITIVUS"}
          justifyContent={"left"}
          git={"https://github.com/davidcodes17/Positivus"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/lff.png"}
          name={"LFF SORTING OUT"}
          justifyContent={"right"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/ecommerce.png"}
          name={"AUTUMN SALES"}
          justifyContent={"left"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/phone.png"}
          name={"DC PHONEBOOK"}
          justifyContent={"right"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/hair.png"}
          name={"LITTLE HAIR NEST"}
          justifyContent={"left"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/bank.png"}
          name={"BANQUEEE"}
          justifyContent={"right"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/rob.png"}
          name={"ROBO FRIENDS"}
          justifyContent={"left"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/fig.png"}
          name={"FIGMA LAND"}
          justifyContent={"right"}
          git={""}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
      </Box>
    </Box>
  );
};

export default Project;
