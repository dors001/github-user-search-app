import { Image, Button, Flex, Heading, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const switchColorMode = function () {
    toggleColorMode();
  };

  return (
    <>
      <Flex margin="2rem" justifyContent="space-between">
        <Heading
          as="h1"
          fontSize="2.6rem"
          lineHeight="3.8rem"
          fontWeight="bold"
        >
          devfinder
        </Heading>
        <Button
          variant="ghost"
          color={colorMode === "light" ? "#697c9a" : "white"}
          fontSize="1.3rem"
          fontWeight="bold"
          placeSelf="center"
          onClick={switchColorMode}
          sx={{
            ":focus": {
              backgroundColor: "transparent",
            },
          }}
          rightIcon={
            <Image
              src={
                colorMode === "light"
                  ? "src/assets/icon-moon.svg"
                  : "src/assets/icon-sun.svg"
              }
            />
          }
        >
          {colorMode === "light" ? "DARK" : "LIGHT"}
        </Button>
      </Flex>
    </>
  );
};

export default Header;
