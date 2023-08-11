import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        fontSize: "62.5%",
      },
    },
    fonts: {

    },
  },
});

export default theme;