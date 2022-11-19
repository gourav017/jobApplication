import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  let links = [
    {
      to: "/jobs",
      title: "All jobs",
    },
    {
      to: "/postthejob",
      title: "wanna posted jobs click here",
    },
  ];

  return (
    <Flex justifyContent="space-evenly" bg="gray.200" p={2} >
      {links.map((l) => (
        <NavLink to={l.to}>
          {" "}
          <Button colorScheme='twitter'>{l.title}</Button>
        </NavLink>
      ))}
    </Flex>
  );
};

export default Navbar;
