import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Joblist = () => {
  const [Jobs, setJobs] = useState([]);

  const data = async() => {
    return await axios
      .get("http://localhost:8080/jobs")
      .then((res) =>setJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    data();
  },[])
  

  return <div>
    {Jobs.map((elem)=>(
      <Flex w="50%" m='auto' alignItems='center' gap='10' border="2px solid red"  >
         <Avatar size='xl' name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
        <Box>
          <Text as='b' color='red'>{elem.Company}</Text>
          <br />
          <Text fontSize='xl' as='i'>{elem.position}</Text>
          <Text>{elem.location}</Text>
        </Box>
        <Spacer/>
        <div style={{display:"flex"}} >
          <Text>{elem.level}</Text>
          <Text>{elem.Role}</Text>
          <Text>{elem.Language}</Text>
        </div>
      </Flex>
    ))}
  </div>;
};

export default Joblist;
