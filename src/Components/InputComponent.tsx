import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  useColorMode,
} from "@chakra-ui/react";

const InputComponent = () => {
  const colorMode = useColorMode().colorMode;

  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <InputGroup>
          <InputLeftElement pointerEvents="none" margin="1.8rem 2rem">
            <Image src="/src/assets/icon-search.svg" />
          </InputLeftElement>
          <Input
            h="60px"
            paddingLeft="6rem"
            borderRadius="20px"
            variant="filled"
            backgroundColor={colorMode === "light" ? "#fefefe" : "#1e2a47"}
            color={colorMode === "light" ? "#4B6A9B" : "white"}
            placeholder="Search GitHub username..."
            _placeholder={{
              color: colorMode === "light" ? "#697c9a" : "white",
              fontWeight: "400",
            }}
            fontSize="1.3rem"
            fontWeight="400"
          />
        </InputGroup>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <InputGroup>
          <InputLeftElement pointerEvents="none" margin="2.2rem 3rem">
            <Image src="/src/assets/icon-search.svg" />
          </InputLeftElement>
          <Input
            h="69px"
            paddingLeft="8rem"
            borderRadius="20px"
            variant="filled"
            backgroundColor={colorMode === "light" ? "#fefefe" : "#1e2a47"}
            color={colorMode === "light" ? "#4B6A9B" : "white"}
            placeholder="Search GitHub username..."
            _placeholder={{
              color: colorMode === "light" ? "#697c9a" : "white",
              fontWeight: "400",
            }}
            fontSize="1.8rem"
            fontWeight="400"
          />
        </InputGroup>
      </Show>
    </>
  );
};

export default InputComponent;
