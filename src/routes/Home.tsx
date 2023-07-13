import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Stack } from "@chakra-ui/react";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Button>
        <Link to="/view">View propositions</Link>
      </Button>
    </>
  );
};

export default Home;
