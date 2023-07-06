import React from "react";
import { Box, Link, Heading, Text, Image, Button } from "@chakra-ui/react";
import profile from "../assets/profil.jpeg";
import cv from "../assets/cv.pdf";

const Home = () => {
  return (
    <Box
      as="section"
      id="home"
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
        Hey, I'm{" "}
        <Text
          as="span"
          css={{ WebkitTextStroke: "0" }}
          fontFamily={"Arial, sans-serif"}
          color="black"
        >
          Eyran Abbou
        </Text>
      </Heading>
      <Text
        fontFamily={"Arial, sans-serif"}
        fontSize={{
          base: "14px",
          sm: "16px",
          md: "18px",
          lg: "20px",
          xl: "22px",
        }}
        color="black"
      >
        I'm a Full Stack Developer & Software Engineer
      </Text>
      <Image
        src={profile}
        alt="Eyran Abbou"
        boxSize={{
          base: "100px",
          sm: "150px",
          md: "200px",
          lg: "250px",
          xl: "300px",
        }}
        objectFit="cover"
        borderRadius="full"
        margin="2rem"
      />
      <Button colorScheme="teal" variant="outline">
        <Link href={cv} isExternal download>
          Download CV
        </Link>
      </Button>
    </Box>
  );
};

export default Home;
