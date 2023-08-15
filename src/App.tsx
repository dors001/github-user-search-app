import { VStack, useColorMode } from "@chakra-ui/react";
import "./App.css";
import theme from "./theme";
import Header from "./Components/Header";
import SearchBar, { User } from "./Components/SearchBar";
import UserInformationContainer from "./Components/UserInformationContainer";
import UseInfoContent from "./Components/UseInfoContent";
import { useEffect, useState } from "react";

function App() {
  const colorMode = useColorMode().colorMode;
  const { setColorMode } = useColorMode();
  const [user, setUser] = useState<User>(Object);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDarkMode) {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  }, [setColorMode]);

  return (
    <>
      <VStack
        padding="2rem"
        backgroundColor={
          colorMode === "dark"
            ? theme.colors.brands.darkColor
            : theme.colors.brands.lightColor
        }
        style={{ height: "100vh" }}
      >
        <Header />
        <SearchBar setUser={setUser} />
        <UserInformationContainer>
          {user && <UseInfoContent user={user} />}
        </UserInformationContainer>
      </VStack>
    </>
  );
}

export default App;
