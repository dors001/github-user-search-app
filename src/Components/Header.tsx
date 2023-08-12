import { Image, Button, Heading, useColorMode, HStack } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const switchColorMode = function () {
    toggleColorMode();
  };

  return (
    <>
      <HStack
        w="100%"
        margin="2rem"
        justifyContent="space-between"
        maxW="730px"
      >
        <Heading
          as="h1"
          fontSize="2.6rem"
          lineHeight="3.8rem"
          fontWeight="bold"
        >
          devfinder
        </Heading>
        <Button
          marginTop="0.5rem"
          variant="ghost"
          color={colorMode === "light" ? "#697c9a" : "white"}
          fontSize="1.3rem"
          fontWeight="bold"
          onClick={switchColorMode}
          _hover={{
            color: colorMode === "light" ? "#d5d8e0" : "#aac1e3",
          }}
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
      </HStack>
    </>
  );
};

export default Header;
