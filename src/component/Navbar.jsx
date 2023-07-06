import React from "react";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"; // Import icons for Dark Mode switch

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");
  const activeBgColor = useColorModeValue("white", "black");
  const activeColor = useColorModeValue("black", "white");

  const navItems = [
    { name: "HOME", to: "home" },
    { name: "PROJECT", to: "project" },
    { name: "SKILLS", to: "skills" },
    { name: "CONTACT", to: "contact" },
  ];

  return (
    <>
      <Flex fontFamily="Roboto, sans-serif"
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
          color={'black'}
          cursor="pointer"
          marginX="1rem"
          _hover={{ color: activeColor, backgroundColor: activeBgColor }}
          fontSize="20px"
        >
         Portfolio.
        </Box>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          color={"black"}
        />
      </Flex>
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
          
        >
          {navItems.map((item, index) => (
            <Box
              as={ScrollLink}
              key={index}
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color={color}
              cursor="pointer"
              fontFamily={'Clash Display,sans-serif'}
              marginX="1rem"
              _hover={{ color: activeColor, borderRadius: '7px', backgroundColor: activeBgColor,  }}
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
