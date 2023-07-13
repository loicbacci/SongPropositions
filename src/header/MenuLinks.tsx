import React from "react";
import { Button, Spacer, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

interface MenuLinksProps {
  isOpen: boolean;
}

const MenuLinks = (props: MenuLinksProps) => {
  const { isOpen } = props;

  return (
    <Stack
      direction={{ base: "column", md: "row-reverse" }}
      display={{ base: isOpen ? "block" : "none", md: "flex" }}
      width={{ base: "full", md: "auto" }}
      alignItems="center"
      flexGrow={1}
      mt={{ base: 4, md: 0 }}
    >
      <MenuItem to="/view">View</MenuItem>
    </Stack>
  );
};

export default MenuLinks;
