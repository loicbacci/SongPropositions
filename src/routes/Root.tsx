import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { Center, Stack } from "@chakra-ui/react";

export default function Root() {
  return (
    <>
      <Header />
      <Center pt={6}>
        <Stack spacing={6}>
          <Outlet />
        </Stack>
      </Center>
    </>
  );
}
