import { extendTheme, Button } from "@chakra-ui/react";

const mainTheme = extendTheme({
  // rest of your theme configuration
  breakpoints: {
    sm: "22.563em", // 360px
    md: "26em", // 414px
    lg: "90.5em", // 1440px
    xl: "120em", // 1920px
  },
});

export default mainTheme;
