import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Pj = () => {
    const [dis,setDis] = useState("none");
  return (
    <Box px={10} py={10} border={"2px solid #000"} pos={"relative"} onMouseOver={()=>{
        setDis("block")
    }} onMouseLeave={()=>{
        setDis("none")
    }}>
      <Heading fontFamily={"Anton"} fontSize={60}>POSITIVUS</Heading>
      <Text py={3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        exercitationem nihil saepe blanditiis hic minima impedit cumque modi,
        debitis officiis a, recusandae molestiae quos unde voluptas voluptates
        optio quaerat tempore?
      </Text>
      <Button>View Project</Button>
      <Box>
        {/* <Image pos={"absolute"} transition={"ease-in-out"} display={dis} top={-50} src="/img.png" width={"40%"} p={5} bg={"#000"} borderRadius={40} right={20} /> */}
      </Box>
    </Box>
  );
};

export default Pj;
