import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";

const config: ThemeConfig = {
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Space Mono",
    body: "Space Mono",
  },
  colors: {
    brands: {
      darkColor: "#141d2f",
      lightColor: "#f6f8ff",
    },
  },
  styles: {
    global: {
      "html, body": {
        margin: "0",
        padding: "0",
        fontSize: "62.5%",
      },
    },
  },
});

export default theme;
