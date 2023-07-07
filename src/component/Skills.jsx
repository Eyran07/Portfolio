import React from "react";
import {
  Box,
  Heading,
  Flex,
  VStack,
  useColorModeValue,
  Divider,
  Circle,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faFigma,
  faGit,
  faSlack,

} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";

const SkillItem = ({ icon, color, name }) => {
  return (
    <VStack spacing={2} alignItems="center" mr={8}>
      <Circle
        size="70px"
        borderColor={color}
        borderWidth="2px"
        _hover={{
          transform: "scale(1.2)",
        }}
        transition="transform 0.2s"
      >
        <FontAwesomeIcon icon={icon} size="2x" color={color} />
      </Circle>
      <Text color={useColorModeValue("#222", "white")}>{name}</Text>
      <Divider orientation="horizontal" w="100%" />
    </VStack>
  );
};


const Skills = () => {
  const frontEndSkills = [
    { icon: faJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: faHtml5, name: "HTML5", color: "#E34F26" },
    { icon: faReact, name: "React", color: "#61DBFB" },
    { icon: faCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: faLaptopCode, name: "Frontend Dev", color: "#007acc" },
  ];

  const backEndSkills = [
    { icon: faNodeJs, name: "Node.js", color: "#539e43" },
    { icon: faServer, name: "Server", color: "#000000" },
    { icon: faDatabase, name: "Database", color: "#47A248" },
    { icon: faServer, name: "Server 2", color: "#FFCA28" },
  ];

  const otherSkills = [
    { icon: faFigma, name: "Figma", color: "#F24E1E" },
    { icon: faGit, name: "Git", color: "#F34F29" },
    { icon: faSlack, name: "Slack", color: "#4A154B" },
    { icon: faServer, name: "Server 3", color: "#000000" },
  ];


  return (
    <Box
      as="section"
      id="skills"
      height="100vh"
      width="100%"
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      padding="1rem"
      backgroundColor={useColorModeValue("white", "#222")}
    >
      <Heading
        fontSize={{ base: "30px", sm: "35px", md: "40px", lg: "45px", xl: "50px" }}
        fontWeight="bold"
        color="white"
        fontFamily={"Arial, sans-serif"}
        mb={9}
        css={{
          WebkitTextStroke: "1px black",
        }}
      >
        My Skills
      </Heading>
      <Flex direction={["column",]} spacing={10} mb={10} w="100%">
        <VStack mb={3} alignItems="center" spacing={2}>
          <Heading
            fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "35px", xl: "40px" }}
            fontFamily={"Arial, sans-serif"}
            // mb={4}
            color={useColorModeValue("#222", "white")}
          >
            Frontend
          </Heading>
          <Flex>
            {frontEndSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </Flex>
        </VStack>
        <Divider mb={3} orientation="vertical" />
        <VStack alignItems="center" spacing={2}>
          <Heading
            fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "35px", xl: "40px" }}
            fontFamily={"Arial, sans-serif"}
            mb={4}
            color={useColorModeValue("#222", "white")}
          >
            Backend
          </Heading>
          <Flex>
            {backEndSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </Flex>
        </VStack>
        <Divider mb={3} orientation="vertical" />
        <VStack alignItems="center" spacing={2}>
          <Heading
            fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "35px", xl: "40px" }}
            fontFamily={"Arial, sans-serif"}
            mb={4}
            color={useColorModeValue("#222", "white")}
          >
            Others
          </Heading>
          <Flex>
            {otherSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Skills;
