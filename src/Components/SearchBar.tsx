import { useState } from "react";
import apiClient from "../services/api-client";
import { InputGroup, Flex, Spacer } from "@chakra-ui/react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: string;
  followers: number;
  following: number;
  created_at: string;
}

interface Props {
  setUser: (user: User) => void;
}

const SearchBar = ({ setUser }: Props) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const getUser = async () => {
    apiClient
      .get<User>(username)
      .then((response) => {
        setUser(response.data);
        setUsername("");
      })
      .catch(() => setError(error));
  };

  return (
    <>
      <Flex w="100%" maxW="730px" maxH="70px" margin="1.5rem">
        <InputGroup>
          <InputComponent
            setUsername={setUsername}
            username={username}
            getUser={getUser}
          />
          <Spacer />
          <ButtonComponent getUser={getUser} />
        </InputGroup>
      </Flex>
    </>
  );
};

export default SearchBar;
