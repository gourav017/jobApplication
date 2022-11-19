import React, { useState } from "react";
import axios from "axios";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Input 
  } from '@chakra-ui/react'

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
    return axios
      .post("http://localhost:8080/jobs", postThejob)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postjob();
  };

  return (
    <FormControl onSubmit={handleSubmit}>
     <Heading as='h2' size='2xl'>
       POST THE JOB
  </Heading>
   <FormLabel>Company name</FormLabel>
      <Input 
        type="text"
        name="Company name"
        placeholder="enter company name here.."
        onChange={handleChange}
      />
       <FormLabel>City</FormLabel>
      <Input 
        type="text"
        name="city"
        id=""
        placeholder="enter city.."
        onChange={handleChange}
      />
       <FormLabel>Location:</FormLabel>
      <Input 
        type="text"
        name="location"
        placeholder="job location.."
        onChange={handleChange}
      />
      <select name="Role" onChange={handleChange}>
        <option value="">Role</option>
        <option value="Frontend">Frontend</option>
        <option value="FullStack">Fullstack</option>
        <option value="Backend">Backend</option>
      </select>
      <select name="level" onChange={handleChange}>
        <option value="">Level</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <Input 
        type="text"
        name="position"
        placeholder="Position"
        onChange={handleChange}
      />
      <Input 
        type="text"
        name="Language"
        placeholder="Language"
        onChange={handleChange}
      />
      <select name="Contract" onChange={handleChange}>
        <option value="">Contract</option>
        <option value="full time">Full time</option>
        <option value="part time">Part time</option>
      </select>
      <button type="submit">submit</button>
    </FormControl>
  );
};

export default PosttheJob;
