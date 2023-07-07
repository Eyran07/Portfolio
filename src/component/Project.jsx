import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Center
} from "@chakra-ui/react";
import project1Image from "../assets/petagency.png";
import project2Image from "../assets/sueapp.png";
import project3Image from "../assets/lmhotel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const projects = [
    {
      title: "Pet Agency App",
      description: "Last project of my bootcamp was to build a pet agency app using react, nodejs, express and mongodb.",
      image: project1Image,
      link: "https://pet-agency-app-client.vercel.app/",
      techIcons: [faReact, faJs, faNodeJs, faServer],
      techIconColors: ["#61dafb", "#f7df1e", "#3c873a", "#4d4d4d"]
    },
    {
      title: "SueApp",
      description: "Developed during my internship at SueApp FAQ, Thanks and 13 forms pages for the website using react and typescript. For the backend I used NodeJS TypeScript Express and MongoDB, and implement the Proof API to send the claim into the adress of the defendant.  ",
      image: project2Image,
      link: "https://dev.sue-app.com/",
      techIcons: [faReact, faJs, faNodeJs, faServer],
      techIconColors: ["#61dafb", "#f7df1e", "#3c873a", "#4d4d4d"]
    },
    {
      title: "Lucien et Marinette",
      description: "Lucien et Marinette is a hotel website.",
      image: project3Image,
      link: "https://lmhotel.vercel.app/",
      techIcons: [faReact, faJs],
      techIconColors: ["#61dafb", "#f7df1e"]
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    image: '',
    techIcons: [],
    techIconColors: []
  });

  const openModal = (title, description, image, techIcons, techIconColors) => {
    setModalContent({title, description, image, techIcons, techIconColors});
    onOpen();
  };

  return (
    <Box
      as="section"
      id="project"
      minH="100vh"
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
        padding="1rem" 
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            margin="2rem"
            d="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
            ml={['30px', '40px', 'none', 'none']}
              src={project.image}
              alt={project.title}
              boxSize={{
                base: "150px",
                sm: "200px",
                md: "250px",
                lg: "300px",
                xl: "350px",
              }}
              objectFit="contain" 
            />
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
              {`${project.description.substring(0, 40)}...`}
            </Text>
            <Button onClick={() => openModal(project.title, project.description, project.image, project.techIcons, project.techIconColors)} colorScheme="teal" variant="outline" mt={2}>
              See More
            </Button>
            <Button colorScheme="teal" variant="outline" mt={2}>
              <Link href={project.link} isExternal>
                View Project
              </Link>
            </Button>
          </Box>
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalContent.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                src={modalContent.image}
                alt="Project"
                boxSize={{
                  base: "150px",
                  sm: "200px",
                  md: "250px",
                  lg: "300px",
                  xl: "350px",
                }}
                objectFit="contain" 
                mb={3}
              />
            </Center>
            {modalContent.description}
            <Flex mt={3} justifyContent="center">
              {modalContent.techIcons.map((icon, index) => (
                <Icon
                  key={index}
                  as={FontAwesomeIcon}
                  icon={icon}
                  boxSize="30px"
                  mx={2}
                  color={modalContent.techIconColors[index]}
                />
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Project;
