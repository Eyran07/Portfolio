import React from "react";
import { Box, Heading, Flex, Text, Divider, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const frontEndSkills = [
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "React", icon: faReact, color: "#61DBFB" },
    { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  ];
  const backEndSkills = [
    { name: "Node.js", icon: faNodeJs, color: "#68A063" },
    { name: "Express", icon: faServer, color: "#000000" },
    { name: "MongoDB", icon: faServer, color: "#4DB33D" },
    { name: "Firebase", icon: faServer, color: "#FFCA28" },
  ];

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
      padding="1rem"
      backgroundColor={useColorModeValue("white", "#222")}
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
        mb={5}
        css={{
          WebkitTextStroke: "1px black",
        }}
      >
        My Skills
      </Heading>
      <Flex direction={["column", "column"]} justifyContent="center"  mt={9}>
        <Box width="100%" textAlign="start">
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
            mt={4}
            css={{
                WebkitTextStroke: "1px white",
              }}
          >
            Frontend
          </Heading>
          <Flex wrap="wrap" justify="center">
            {frontEndSkills.map((skill, index) => (
              <Box
                key={index}
                m={3}
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <FontAwesomeIcon icon={skill.icon} size="3x" color={skill.color} />
                <Text>{skill.name}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
        </Flex>
        <Divider borderColor="gray.500" w={'320px'} />
        <Flex direction={["column", "column"]} backgroundColor={useColorModeValue("white", "#222")} justifyContent="center" >
        <Box width="100%" textAlign="start" >
          <Heading
          mr={'10px'}
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
          <Flex wrap="wrap"  justify="center">
            {backEndSkills.map((skill, index) => (
              <Box
                key={index}
                m={2}
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <FontAwesomeIcon icon={skill.icon} size="3x" color={skill.color} />
                <Text>{skill.name}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
        </Flex>
    </Box>
  );
};

export default Skills;
