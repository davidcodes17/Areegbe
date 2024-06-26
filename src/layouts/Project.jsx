import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Pj from "../components/Pj";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <Box
    id="projects"
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
      px={{ lg: 50, md: 50, sm: 10, base: 5 }}
      py={100}
    >
      <Heading
        fontFamily={"Anton"}
        fontSize={{ lg: 100, md: "80px", sm: "80px", base: "50px" }}
        px={{ lg: 10, md: 10, sm: 5, base: 5 }}
      >
        Projects
      </Heading>
      <Box px={0} mt={{lg : 10, md : 10, sm : 0, base : 0}}>
        <Pj
          img={"/img.png"}
          name={"POSITIVUS"}
          justifyContent={"left"}
          link={"https://positivus-liart.vercel.app/"}
          git={"https://github.com/davidcodes17/Positivus"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/lff.png"}
          name={"LFF SORTING OUT"}
          link={"https://theoslogion.org/"}
          justifyContent={"right"}
          git={"https://github.com/davidcodes17/LFF"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/ecommerce.png"}
          name={"AUTUMN SALES"}
          link={"https://dc-fakeapi.vercel.app/"}
          justifyContent={"left"}
          git={"https://github.com/davidcodes17/ecommerce-shop-starter"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/phone.png"}
          name={"DC PHONEBOOK"}
          justifyContent={"right"}
          link={"https://phone-book-indol-gamma.vercel.app/"}
          git={"https://github.com/davidcodes17/PhoneBook-Frontend"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/hair.png"}
          name={"LITTLE HAIR NEST"}
          justifyContent={"left"}
          link={"https://little-hair-nest2.vercel.app/"}
          git={"https://github.com/davidcodes17/Little-Hair-Nest2"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/bank.png"}
          name={"BANQUEEE"}
          justifyContent={"right"}
          link={"https://banking-app-psi-seven.vercel.app/"}
          git={"https://banking-app-psi-seven.vercel.app/"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/rob.png"}
          name={"ROBO FRIENDS"}
          justifyContent={"left"}
          link={"https://robotfriend-dc.netlify.app/"}
          git={"https://github.com/davidcodes17/Robo-Friends-API"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
        <Pj
          img={"/fig.png"}
          name={"FIGMA LAND"}
          justifyContent={"right"}
          link={"https://figmalander.netlify.app/"}
          git={"https://github.com/davidcodes17/FIGMA-LAND"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt officia neque eaque temporibus reprehenderit eius amet iure, recusandae dignissimos, quos nostrum hic itaque minima vitae magnam veritatis inventore molestias?"
          }
        />
      </Box>
    </Box>
  );
};

export default Project;
