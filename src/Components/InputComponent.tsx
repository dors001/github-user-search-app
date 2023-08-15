import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  username: string;
  setUsername: (value: string) => void;
  getUser: () => void;
  error: string;
}

const InputComponent = ({ username, setUsername, getUser, error }: Props) => {
  const colorMode = useColorMode().colorMode;
  const placeholderColor = function () {
    if (!error) {
      var colorTheme = colorMode === "light" ? "#4B6A9B" : "white";
      return colorTheme;
    }

    return "red";
  };

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
            placeholder={error ? error : "Search GitHub username..."}
            _placeholder={{
              color: placeholderColor,
              fontWeight: "400",
            }}
            fontSize="1.3rem"
            fontWeight="400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={function (e) {
              if (e.key === "Enter") getUser();
            }}
          />
        </InputGroup>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <InputGroup>
          <InputLeftElement pointerEvents="none" margin="2.2rem 3rem">
            <Image src="../assets/icon-search.svg" />
          </InputLeftElement>
          <Input
            h="69px"
            paddingLeft="8rem"
            borderRadius="20px"
            variant="filled"
            backgroundColor={colorMode === "light" ? "#fefefe" : "#1e2a47"}
            color={colorMode === "light" ? "#4B6A9B" : "white"}
            placeholder={error ? error : "Search GitHub username..."}
            _placeholder={{
              color: placeholderColor,
              fontWeight: "400",
            }}
            fontSize="1.8rem"
            fontWeight="400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={function (e) {
              if (e.key === "Enter") getUser();
            }}
          />
        </InputGroup>
      </Show>
    </>
  );
};

export default InputComponent;
