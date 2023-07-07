import React from "react";
import { Box, Heading, Text, Flex, Link, List, ListItem, ListIcon, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const iconColor = useColorModeValue("#222", "white");

  return (
    <Box
      as="section"
      id="contact"
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
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
        color={iconColor}
        fontFamily={"Arial, sans-serif"}
        mb={'30px'}
      >
        Contact Me
      </Heading>
      <Flex
        direction="column"
        alignItems="center"
        mt={9}
        spacing={4}
      >
        <List spacing={3}>
          <ListItem>
            <Icon as={FaEnvelope} boxSize={8} color={iconColor} />
            <Link href="mailto:eyranabbou20@gmail.com" color={iconColor}>
              eyranabbou20@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <Icon as={FaPhone} boxSize={8} color={iconColor} />
            <Text color={iconColor}>+972 54-499-4778</Text>
          </ListItem>
          <ListItem>
            <Icon as={FaLinkedin} boxSize={8} color={iconColor} />
            <Link href="https://www.linkedin.com/in/eyran-abbou-1a125a21b/" color={iconColor} isExternal>
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <Icon as={FaGithub} boxSize={8} color={iconColor} />
            <Link href="https://github.com/Eyran07" color={iconColor} isExternal>
              GitHub
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default Contact;
