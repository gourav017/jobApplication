import { Avatar, Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DatetoDay from "./DatetoDay";

const Joblist = () => {
  const [Jobs, setJobs] = useState([]);

  const data = async () => {
    return await axios
      .get("http://localhost:8080/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  const handleSortbyrole = async (e) => {
    let value = e.target.value;
    return await axios
      .get(`http://localhost:8080/jobs?_sort=${value}&_order=asc`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  const handlebyFilter=async (e) => {
    let value = e.target.value;
    return await axios
      .get(`http://localhost:8080/jobs?level=${value}`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <select onChange={handleSortbyrole}>
        <option value="">sort by</option>
        <option value="Role">Role</option>
        <option value="Company">Company</option>
        <option value="city">city</option>
        <option value="location">location</option>
      </select>
      <select onChange={handlebyFilter}>
        <option value="#">filter by</option>
        <option value="Junior">Junior</option>
        <option value="Senior">senior</option>
      </select>
      {Jobs.map((elem) => (
        <Flex
          w="50%"
          m="auto"
          alignItems="center"
          gap="10"
          border="2px solid red"
        >
          <Avatar
            size="xl"
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
          <Box>
            <Text as="b" color="teal.400">
            {elem.Company}
            {elem.city}
            </Text>
            <br />
            <Text fontSize="xl" as="b">
              {elem.position}
            </Text>
            <Text>{elem.location}</Text>
            <DatetoDay date={elem.postedAt} />
          </Box>
          <Spacer />
          <div style={{ display: "flex" }}>
            <Text>{elem.level}</Text>
            <Text>{elem.Role}</Text>
            <Text>{elem.Language}</Text>
          </div>
        </Flex>
      ))}
    </div>
  );
};

export default Joblist;
