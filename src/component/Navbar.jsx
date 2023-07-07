import React, { useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  useColorMode,
  useDisclosure,
  Collapse,
  VStack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#222", "white");
  const color = useColorModeValue("white", "#222");
  const activeBgColor = useColorModeValue("white", "#222");
  const activeColor = useColorModeValue("#222", "white");

  const [currentSection, setCurrentSection] = useState("home");

  const navItems = [
    { name: "HOME", to: "home" },
    { name: "PROJECT", to: "project" },
    { name: "SKILLS", to: "skills" },
    { name: "CONTACT", to: "contact" },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <>
      <Flex backgroundColor={bgColor} color={color}
        justifyContent="space-between"
        padding="1rem"
        position="fixed"
        width="100%"
      >
        <Box
          as={ScrollLink}
          activeClass="active"
          to={'home'}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          cursor="pointer"
          marginX="1rem"
          color={color}
          _hover={{ color: activeColor, backgroundColor: activeBgColor }}
          fontSize="20px"
        >
         Portfolio.
        </Box>
        <Box display={["block", "block", "none", "none"]} onClick={handleToggle}>
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          color={"black"}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          display={["flex", "flex", "none", "none"]}
          flexDirection="column"
          position="fixed"
          top="5rem"
          width="100%"
          bgColor={bgColor}
          zIndex="modal"
          padding="1rem"
        >
          {navItems.map((item, index) => (
            <Box
            as={ScrollLink}
            key={index}
            to={item.to}
            spy={true}
            smooth={true}
            offset={item.to === "contact" ? 0 : -70}
            duration={500}
            color={item.to === currentSection ? activeColor : color} // Change color when active
            backgroundColor={item.to === currentSection ? activeBgColor : "transparent"} // Change background color when active
            cursor="pointer"
            fontWeight={600}
            fontSize="15px"
            marginX="1rem"
            _hover={{ color: activeColor, backgroundColor: activeBgColor }}
            onSetActive={() => setCurrentSection(item.to)}
            p={2} // padding
            borderRadius="50px" // rounded corners
          >
            {item.name}
          </Box>
          
          ))}
        </VStack>
      </Collapse>
      <Flex
        position="fixed"
        bottom="0"
        width="100%"
        justifyContent="center"
        padding="1rem"
        overflowX="hidden"
      >
        <Flex
          borderRadius="50px"
          as="ul"
          listStyleType="none"
          justifyContent="space-between"
          paddingX="20px"
          paddingY="10px"
          bgColor={bgColor}
          display={["none", "none", "flex", "flex"]}
        >
          {navItems.map((item, index) => (
            <Box
              as={ScrollLink}
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color={item.to === currentSection ? activeColor : color} // Change color when active
              backgroundColor={item.to === currentSection ? activeBgColor : "transparent"} // Change background color when active
              cursor="pointer"
              fontWeight={600}
              fontSize="15px"
              marginX="1rem"
              _hover={{ color: activeColor, backgroundColor: activeBgColor }}
              onSetActive={() => setCurrentSection(item.to)}
              p={2} // padding
              borderRadius="50px" // rounded corners
            >
              {item.name}
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
