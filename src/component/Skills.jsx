import React from "react";
import { Box, Heading, Text, Flex, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const frontEndSkills = ["JavaScript", "TypeScript", "React", "React Native", "Chakra UI"];
  const backEndSkills = ["MongoDB", "Firebase", "Node.js", "Express"];

  return (
    <Box
      as="section"
      id="skills"
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      padding="1rem"
    >
      <Heading
        fontSize={{
          base: "30px",
          sm: "35px",
          md: "40px",
          lg: "45px",
          xl: "50px",
        }}
        fontWeight="bold"
        color="white"
        fontFamily={"Arial, sans-serif"}
        mb={0}
        css={{
          WebkitTextStroke: "1px black",
        }}
      >
        My Skills
      </Heading>
      <Flex
        direction={{
          base: "column",
          sm: "row",
        }}
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        mt={9}
      >
        <Box margin="2rem">
          <Heading
            fontSize={{
              base: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "40px",
            }}
            color="black"
            fontFamily={"Arial, sans-serif"}
            mt={2}
          >
            Frontend
          </Heading>
          <FontAwesomeIcon icon={faLaptopCode} size="2x" color="teal" />
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Skills</Th>
              </Tr>
            </Thead>
            <Tbody>
              {frontEndSkills.map((skill, index) => (
                <Tr key={index} _hover={{ background: "teal", color: "white" }}>
                  <Td>{skill}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box margin="2rem">
          <Heading
            fontSize={{
              base: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "40px",
            }}
            color="black"
            fontFamily={"Arial, sans-serif"}
            mt={2}
          >
            Backend
          </Heading>
          <FontAwesomeIcon icon={faServer} size="2x" color="teal" />
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Skills</Th>
              </Tr>
            </Thead>
            <Tbody>
              {backEndSkills.map((skill, index) => (
                <Tr key={index} _hover={{ background: "teal", color: "white" }}>
                  <Td>{skill}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
