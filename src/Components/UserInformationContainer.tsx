import { Box, Show, useColorMode } from "@chakra-ui/react";

interface Props {
  children: React.ReactElement;
}

const UserInformationContainer = ({ children }: Props) => {
  const colorMode = useColorMode().colorMode;
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Box
          w="100%"
          backgroundColor={colorMode === "dark" ? "#1E2A47" : "#FEFEFE"}
          borderRadius="20px"
          padding="2rem"
        >
          {children}
        </Box>
      </Show>
      <Show breakpoint="(min-width: 768px) and (max-width: 1023px)">
        <Box
          w="100%"
          backgroundColor={colorMode === "dark" ? "#1E2A47" : "#FEFEFE"}
          borderRadius="20px"
          padding="2rem"
        >
          {children}
        </Box>
      </Show>
      <Show breakpoint="(min-width: 1024px)">
        <Box
          w="730px"
          backgroundColor={colorMode === "dark" ? "#1E2A47" : "#FEFEFE"}
          borderRadius="20px"
          padding="2rem"
        >
          {children}
        </Box>
      </Show>
    </>
  );
};

export default UserInformationContainer;
