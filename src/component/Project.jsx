import React from "react";
import { Box, Heading, Text, Image, Button, Link, Flex } from "@chakra-ui/react";
// import project1Image from "../assets/project1.jpg";
// import project2Image from "../assets/project2.jpg";
// import project3Image from "../assets/project3.jpg";

const Project = () => {
  const projects = [
    {
      title: "Pet Agency App",
      description: "Web application for a pet agency.",
    //   image: project1Image,
      link: "https://pet-agency-app-client.vercel.app/",
    },
    {
      title: "SueApp",
      description: "SueApp is a web application for a law firm.",
    //   image: project2Image,
      link: "https://project2.com",
    },
    {
      title: "Lucien et Marinette ",
      description: "Lucien et Marinette is a hotel website.",
    //   image: project3Image,
      link: "https://lmhotel.vercel.app/",
    },
  ];

  return (
    <Box
      as="section"
      id="project"
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
        My Projects
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
        {projects.map((project, index) => (
          <Box key={index} margin="2rem">
            <Image
              src={project.image}
              alt={project.title}
              boxSize={{
                base: "100px",
                sm: "150px",
                md: "200px",
                lg: "250px",
                xl: "300px",
              }}
              objectFit="cover"            />
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
              {project.title}
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
              {project.description}
            </Text>
            <Button colorScheme="teal" variant="outline" mt={2}>
              <Link href={project.link} isExternal>
                View Project
              </Link>
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Project;