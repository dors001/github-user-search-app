import { Button, InputRightElement, Show } from "@chakra-ui/react";

interface Props {
  getUser: () => void;
}

const ButtonComponent = ({ getUser }: Props) => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <InputRightElement margin="1.8rem 0.5rem" w="20%">
          <Button
            h="45px"
            w="84px"
            _hover={{ backgroundColor: "#60ABFF" }}
            _active={{
              transform: "scale(0.98)",
              backgroundColor: "#457cba",
            }}
            variant="solid"
            color="white"
            backgroundColor="#0079ff"
            borderRadius="15px"
            fontSize="1.3rem"
            onClick={() => getUser()}
          >
            Search
          </Button>
        </InputRightElement>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <InputRightElement margin="2.2rem 0" w="20%">
          <Button
            h="50px"
            w="106px"
            _hover={{ backgroundColor: "#60ABFF" }}
            _active={{
              transform: "scale(0.98)",
              backgroundColor: "#457cba",
            }}
            variant="solid"
            color="white"
            backgroundColor="#0079ff"
            borderRadius="15px"
            fontSize="1.3rem"
            onClick={() => getUser()}
          >
            Search
          </Button>
        </InputRightElement>
      </Show>
    </>
  );
};

export default ButtonComponent;
