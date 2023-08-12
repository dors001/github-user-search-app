import {
  Box,
  Grid,
  GridItem,
  Show,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import "./App.css";
import theme from "./theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import UserInformationContainer from "./Components/UserInformationContainer";

function App() {
  const colorMode = useColorMode().colorMode;

  return (
    <>
      <VStack
        padding="2rem"
        backgroundColor={
          colorMode === "dark"
            ? theme.colors.brands.darkColor
            : theme.colors.brands.lightColor
        }
      >
        <Header />
        <SearchBar />
        <UserInformationContainer>
          <Grid
            templateAreas={`"avatar user-info"
              "summary summary"
              "dashboard dashboard"
              "socials socials"`}
            templateRows={"1fr 1fr 1fr 1fr"}
            templateColumns={"0.3fr 0.7fr"}
            gap={4}
          >
            <Show breakpoint="(max-width: 1023px)">
              <GridItem area={"avatar"}>
                <Box>Avatar</Box>
              </GridItem>
              <GridItem area={"user-info"}>
                <Box>user info</Box>
              </GridItem>
              <GridItem area={"summary"}>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum dolores obcaecati blanditiis nobis hic est maxime
                  labore repellat incidunt delectus.
                </Text>
              </GridItem>
              <GridItem area={"dashboard"}>
                <Box>Dashboard</Box>
              </GridItem>
            </Show>
            <Show breakpoint="(max-width: 767px)">
              <GridItem area={"socials"}>
                <Box>twitter</Box>
                <Box>facebook</Box>
                <Box>github</Box>
                <Box>location</Box>
              </GridItem>
            </Show>
            <Show breakpoint="(min-width: 1024px)">
              <GridItem area={"avatar"}>
                <Box>Avatar</Box>
              </GridItem>
              <GridItem area={"user-info"}>
                <Box>user info</Box>
              </GridItem>
              <GridItem area={"summary"} colStart={2}>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum dolores obcaecati blanditiis nobis hic est maxime
                  labore repellat incidunt delectus.
                </Text>
              </GridItem>
              <GridItem area={"dashboard"} colStart={2}>
                <Box>Dashboard</Box>
              </GridItem>
            </Show>
            <Show breakpoint="(min-width: 768px)">
              <GridItem area={"socials"}>
                <Box>twitter</Box>
                <Box>facebook</Box>
                <Box float="right">
                  <Box>github</Box>
                  <Box>location</Box>
                </Box>
              </GridItem>
            </Show>
          </Grid>
        </UserInformationContainer>
      </VStack>
    </>
  );
}

export default App;
