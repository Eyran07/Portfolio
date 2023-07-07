import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Center,
  Divider,
  HStack,
  VStack
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactItem = ({ icon, children, href, isExternal }) => {
  const iconColor = useColorModeValue("#222", "white");
  return (
    <HStack spacing={4} align="center">
      <Icon as={icon} boxSize={8} color={iconColor} /> {/* If the icons are too big, you can also adjust the boxSize here */}
      {href ? (
        <Link fontSize={{base: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px"}} href={href} color={iconColor} isExternal={isExternal}>
          {children}
        </Link>
      ) : (
        <Text fontSize={{base: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px"}} color={iconColor}>{children}</Text>
      )}
    </HStack>
  );
};


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
        mb={"30px"}
      >
        Contact Me
      </Heading>
      <VStack fontSize={'10px'} spacing={8} alignItems="center" mt={9}>
        <ContactItem icon={FaEnvelope} href="mailto:eyranabbou20@gmail.com">
          eyranabbou20@gmail.com
        </ContactItem>
        <ContactItem icon={FaPhone}>+972 54-499-4778</ContactItem>
        <ContactItem
          icon={FaLinkedin}
          href="https://www.linkedin.com/in/eyran-abbou-1a125a21b/"
          isExternal
        >
          LinkedIn
        </ContactItem>
        <ContactItem
          icon={FaGithub}
          href="https://github.com/Eyran07"
          isExternal
        >
          GitHub
        </ContactItem>
      </VStack>
      <Flex
        flexDir="column"
        maxW="1920px"
        marginX={"auto"}
        color={iconColor}
        w={["100%"]}
        backgroundColor={useColorModeValue("white", "#222")}
      >
        <Flex
          flexDir="column"
          marginTop={["50px", "50px", "102px", "102px"]}
          marginBottom={["0px", "0px", "100px", "200px"]}
          zIndex={2}
          justifyContent="center"
          alignItems="center"
          align="center"
          w={["100%"]}
        >
          <Center w={["90%"]}>
            <Divider orientation="horizontal" />
          </Center>

          <Flex
            marginTop={["0px", "0px", "10px", "10px"]}
            marginBottom={["0px", "0px", "26px", "26px"]}
            w={["80%"]}
            justifyContent="space-between"
            flexDir={["column", "column", "row", "row"]}
          >
            <Text paddingY={["7px", "7px", "0px", "0px"]}>
              Copyright © {new Date().getFullYear()} Eyran Abbou LTD. All rights
              reserved.
            </Text>
            <Text paddingY={["7px", "7px", "0px", "0px"]}>
              Made by Eyran Abbou
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
