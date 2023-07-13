import { Center, Container, VStack, Text, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "./header/Header";

function App() {
  return (
    <>
      <Header />
      <Center pt={6}>
        <Stack spacing={6}>
          <Text>Hello</Text>
        </Stack>
      </Center>
    </>
  );
}

export default App;
