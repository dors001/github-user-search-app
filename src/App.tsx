import { Box, Flex, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Box backgroundColor="pink">search bar</Box>
        <Box id="content">
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
                <Box backgroundColor="red">Avatar</Box>
              </GridItem>
              <GridItem area={"user-info"} backgroundColor="blue">
                <Box>user info</Box>
              </GridItem>
              <GridItem area={"summary"} backgroundColor="yellow">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum dolores obcaecati blanditiis nobis hic est maxime
                  labore repellat incidunt delectus.
                </Text>
              </GridItem>
              <GridItem area={"dashboard"}>
                <Box backgroundColor="purple">Dashboard</Box>
              </GridItem>
            </Show>
            <Show breakpoint="(max-width: 767px)">
              <GridItem area={"socials"}>
                <Box backgroundColor="green">twitter</Box>
                <Box backgroundColor="green">facebook</Box>
                <Box backgroundColor="green">github</Box>
                <Box backgroundColor="green">location</Box>
              </GridItem>
            </Show>
            <Show breakpoint="(min-width: 1024px)">
              <GridItem area={"avatar"}>
                <Box backgroundColor="red">Avatar</Box>
              </GridItem>
              <GridItem area={"user-info"} backgroundColor="blue">
                <Box>user info</Box>
              </GridItem>
              <GridItem area={"summary"} backgroundColor="yellow" colStart={2}>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum dolores obcaecati blanditiis nobis hic est maxime
                  labore repellat incidunt delectus.
                </Text>
              </GridItem>
              <GridItem area={"dashboard"} colStart={2}>
                <Box backgroundColor="purple">Dashboard</Box>
              </GridItem>
            </Show>
            <Show breakpoint="(min-width: 768px)">
              <GridItem area={"socials"}>
                <Box backgroundColor="green">twitter</Box>
                <Box backgroundColor="green">facebook</Box>
                <Box float="right">
                  <Box backgroundColor="green">github</Box>
                  <Box backgroundColor="green">location</Box>
                </Box>
              </GridItem>
            </Show>
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default App;
