import { Center, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { getAllPropositions } from "../firebase";

const View = () => {
  const [propositions, setPropositions] = useState(
    undefined as Proposition[] | undefined
  );
  const [error, setError] = useState(null as Error | null);

  useEffect(() => {
    setError(null);

    getAllPropositions()
      .then(setPropositions)
      .catch((res) => setError(new Error(res.message)));
  }, []);

  return (
    <>
      <Heading>List of propositions</Heading>

      {error && <Text>{error}</Text>}
      {propositions === undefined ? (
        <Spinner />
      ) : (
        propositions.map((p) => <Text key={p.id}>{p.title}</Text>)
      )}
    </>
  );
};

export default View;
