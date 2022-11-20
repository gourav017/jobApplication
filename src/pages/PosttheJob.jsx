import React, { useState } from "react";
import axios from "axios";
import { FormLabel, Heading, Input, Select, Button } from "@chakra-ui/react";

const PosttheJob = () => {
  const [postThejob, setpostThejob] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setpostThejob({
      ...postThejob,
      [name]: value,
    });
  };

  const postjob = () => {
    let { Company, city, location, Role, level, position, Language, Contract } =
      postThejob;

    console.log(
      Company,
      city,
      location,
      Role,
      level,
      position,
      Language,
      Contract
    );
    if (Company === undefined || Company.trim().length === 0) {
      alert("please fill the name of the Company");
    } else if (city === undefined || city.trim().length === 0) {
      alert("please fill the city");
    } else if (location === undefined || location.trim().length === 0) {
      alert("please fill the location");
    } else if (Role === undefined) {
      alert("please fill the Role");
    } else if (level === undefined) {
      alert("please fill the level");
    } else if (position === undefined || position.trim().length === 0) {
      alert("please fill the postion!");
    } else if (Language === undefined || Language.trim().length === 0) {
      alert("please fill the language");
    } else if (Contract === undefined) {
      alert("please fill the Contract");
    } else {
      return axios
        .post("http://localhost:8080/jobs", postThejob)
        .then((res) => alert("job poseted sucessfully!"))
        .catch((err) => alert("something went wrong!"));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postjob();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto"}}>
      <Heading as="h2" size="2xl">
        POST THE JOB
      </Heading>
      <FormLabel>Company name</FormLabel>
      <Input
        type="text"
        name="Company"
        placeholder="enter company name here.."
        onChange={handleChange}
      />
      <br />
      <FormLabel>City</FormLabel>
      <Input
        type="text"
        name="city"
        id=""
        placeholder="enter city.."
        onChange={handleChange}
      />
      <br />
      <FormLabel>Location</FormLabel>
      <Input
        type="text"
        name="location"
        placeholder="job location.."
        onChange={handleChange}
      />
      <br />
      <br />
      <Select name="Role" onChange={handleChange}>
        <option value="">Role</option>
        <option value="Frontend">Frontend</option>
        <option value="FullStack">Fullstack</option>
        <option value="Backend">Backend</option>
      </Select>
      <br />
      <Select name="level" onChange={handleChange}>
        <option value="">Level</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </Select>
      <br />
      <br />
      <Input
        type="text"
        name="position"
        placeholder="Position"
        onChange={handleChange}
      />
      <br />
      <br />
      <Input
        type="text"
        name="Language"
        placeholder="Language"
        onChange={handleChange}
      />
      <br />
      <br />
      <Select name="Contract" onChange={handleChange}>
        <option value="">Contract</option>
        <option value="full time">Full time</option>
        <option value="part time">Part time</option>
      </Select>
      <br />
      <Button type="submit" colorScheme="teal" size="lg">
        Submit
      </Button>
    </form>
  );
};

export default PosttheJob;
