import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Project from "../layouts/Project";
import { motion, useScroll } from "framer-motion";
import Footer from "../layouts/Footer";

const Home = () => {
  const scroll = useScroll();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);
  useEffect(() => {
    console.log(scroll.scrollY);
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y,
    },
  };
  return (
    <Box>
      <Box
        width={"100vw"}
        p={5}
        color={"#fff"}
        height={{ lg: "100vh", md: "100vh", sm: "80vh", base: "70vh" }}
        bgImage={"/bg.jpg"}
        bgSize={"cover"}
        pos={"relative"}
      >
        <Header />
        <Hero />
        <motion.div variants={variants} className="cursor" animate="default" />
      </Box>
      <Box px={10} pt={100}>
        <About />
      </Box>
      <Project />
      <Footer />
    </Box>
  );
};

export default Home;
