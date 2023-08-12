import { InputGroup, Flex, Spacer } from "@chakra-ui/react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

//TODO: Add error when user was not found
//TODO: clear search bar after click

const SearchBar = () => {
  return (
    <>
      <Flex w="100%" maxW="730px" maxH="70px" margin="1.5rem">
        <InputGroup>
          <InputComponent />
          <Spacer />
            <ButtonComponent />
        </InputGroup>
      </Flex>
    </>
  );
};

export default SearchBar;
