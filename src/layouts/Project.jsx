import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Pj from '../components/Pj'

const Project = () => {
  return (
    <Box>
        <Heading fontFamily={"Anton"} fontSize={100} px={10}>Projects</Heading>
        <Box mt={10}>
            <Pj />
            <Pj />
            <Pj />
            <Pj />
            <Pj />
            <Pj />
            <Pj />
        </Box>
    </Box>
  )
}

export default Project