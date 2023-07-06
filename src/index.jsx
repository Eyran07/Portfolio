import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import mainTheme from './themes/Main';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);
