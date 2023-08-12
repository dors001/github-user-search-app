import { Box, useColorMode } from "@chakra-ui/react";

interface Props {
  children: React.ReactElement;
}

const UserInformationContainer = ({ children }: Props) => {
  const colorMode = useColorMode().colorMode;
  return (
    <>
      <Box
        backgroundColor={colorMode === "dark" ? "#1E2A47" : "#FEFEFE"}
        borderRadius="20px"
      >
        {children}
      </Box>
    </>
  );
};

export default UserInformationContainer;
