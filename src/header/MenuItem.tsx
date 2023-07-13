import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

interface MenuItemProps {
  children: React.ReactNode;
  to: string;
}

const MenuItem = (props: MenuItemProps) => {
  const { children, to } = props;

  return (
    <NavLink to={to}>
      <Button variant="outline" colorScheme="white">
        {children}
      </Button>
    </NavLink>
  );
};

export default MenuItem;
