import React from "react";
import { Box, Heading, Text, Flex, Link, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
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
            <ListIcon as={FaEnvelope} color="teal" />
            <Link href="eyranabbou20@gmail.com" color="black">
              eyranabbou20@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={FaPhone} color="teal" />
            <Text color="black">+972 54-499-4778</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaLinkedin} color="teal" />
            <Link href="https://www.linkedin.com/in/eyran-abbou-1a125a21b/" color="black" isExternal>
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={FaGithub} color="teal" />
            <Link href="https://github.com/Eyran07" color="black" isExternal>
              GitHub
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default Contact;
