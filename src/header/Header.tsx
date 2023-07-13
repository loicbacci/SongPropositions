import React, { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={3}
      px={6}
      bg="teal.500"
      color="white"
      m={{ base: 0, md: 2 }}
      borderRadius={{ base: 0, md: "lg" }}
    >
      <Flex align="center" mr={5}>
        <NavLink to="/">
          <Heading as="h1" size="lg">
            Song Propositions
          </Heading>
        </NavLink>
      </Flex>

      <>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </>
    </Flex>
  );
};

export default Header;
