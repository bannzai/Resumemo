import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  ThemeProvider,
} from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Popup = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>Hello, Wolrd</Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Popup />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("popup")
);
