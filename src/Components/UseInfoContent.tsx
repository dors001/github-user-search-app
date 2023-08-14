import {
  Box,
  Image,
  Text,
  Grid,
  Show,
  GridItem,
  Heading,
  Flex,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import theme from "../theme";
import { User } from "./SearchBar";

interface Props {
  user: User;
}

enum Colors {
  missingItem = "#697c9a",
}

enum Icons {
  location = "#icon-location",
  blog = "#icon-website",
  twitter = "#icon-twitter",
  company = "#icon-company",
}

fetch("./src/assets/sprite.svg")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

const UseInfoContent = ({ user }: Props) => {
  const colorMode = useColorMode().colorMode;
  const colorTheme = () =>
    colorMode === "dark"
      ? theme.colors.brands.darkColor
      : theme.colors.brands.lightColor;

  const formatDate = function (dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  const svgIcon = function (userProperty: string, userPropertyIcon: string) {
    if (!user) return <svg></svg>;

    if (
      userProperty === "" ||
      userProperty === undefined ||
      userProperty === null
    ) {
      return (
        <svg width="20" height="20" style={{ color: Colors.missingItem }}>
          <use xlinkHref={userPropertyIcon} />
        </svg>
      );
    }

    return (
      <svg width="20" height="20" style={{ color: colorTheme.toString() }}>
        <use xlinkHref={userPropertyIcon} />
      </svg>
    );
  };

  const socialInfo = function (userProperty: string) {
    if (!user) return <Text></Text>;

    if (
      userProperty === "" ||
      userProperty === undefined ||
      userProperty === null
    )
      return (
        <Text fontSize="1.3rem" color={Colors.missingItem}>
          Not Available
        </Text>
      );

    return (
      <Text fontSize="1.3rem" color={colorTheme.toString()}>
        {userProperty}
      </Text>
    );
  };

  const formattedDate = formatDate(user.created_at);

  return (
    <>
      <Grid
        templateAreas={`"avatar user-info"
              "summary summary"
              "dashboard dashboard"
              "socials socials"`}
        templateRows={"0.8fr 1fr 1fr 1fr"}
        templateColumns={"0.3fr 0.7fr"}
        gap={4}
      >
        <Show breakpoint="(max-width: 1023px)">
          <GridItem area={"avatar"}>
            {user && <Image src={user.avatar_url} borderRadius="50%" />}
          </GridItem>
          <GridItem area={"user-info"} margin="1rem">
            {user && <Heading as="h2">{user.name}</Heading>}
            {
              <Text fontSize="1.6rem" color="blue" margin="0.5rem 0">
                {user.login !== undefined ? "@" + user.login : ""}
              </Text>
            }
            {
              <Text fontSize="1.5rem">
                {user.created_at !== undefined ? "Joined " + formattedDate : ""}
              </Text>
            }
          </GridItem>
          <GridItem area={"summary"} margin="1rem 0 1rem 1rem">
            {user && <Text fontSize="1.5rem">{user.bio}</Text>}
          </GridItem>
          <GridItem area={"dashboard"}>
            <Flex
              backgroundColor={colorMode === "dark" ? "#141d2f" : "#f6f8ff"}
              borderRadius="15px"
              justifyContent="space-evenly"
              alignItems="center"
              padding="0.8rem"
              h="85px"
            >
              <Box textAlign="center">
                <Text fontSize="1.3rem">
                  {user && user.id !== undefined ? "Repos" : ""}
                </Text>
                {user && (
                  <Text fontSize="2.2rem" fontWeight="bold">
                    {user.public_repos}
                  </Text>
                )}
              </Box>
              <Box textAlign="center">
                <Text fontSize="1.3rem">
                  {user && user.id !== undefined ? "Followers" : ""}
                </Text>
                {user && (
                  <Text fontSize="2.2rem" fontWeight="bold">
                    {user.followers}
                  </Text>
                )}
              </Box>
              <Box textAlign="center">
                <Text fontSize="1.3rem">
                  {user && user.id !== undefined ? "Following" : ""}
                </Text>
                {user && (
                  <Text fontSize="2.2rem" fontWeight="bold">
                    {user.following}
                  </Text>
                )}
              </Box>
            </Flex>
          </GridItem>
        </Show>
        <Show breakpoint="(max-width: 767px)">
          <GridItem area={"socials"}>
            <Flex gap={4} marginBottom="1rem">
              {svgIcon(user.location, Icons.location)}
              {socialInfo(user.location)}
            </Flex>
            <Flex gap={4} marginBottom="1rem">
              {svgIcon(user.blog, Icons.blog)}
              {
                <Link
                  href={user.blog}
                  fontSize="1.3rem"
                  isExternal
                  color={
                    user && user.blog !== undefined
                      ? colorTheme.toString()
                      : Colors.missingItem
                  }
                >
                  {user && user.blog !== undefined
                    ? user.blog
                    : "Not Available"}
                </Link>
              }
            </Flex>
            <Flex gap={4} marginBottom="1rem">
              {svgIcon(user.twitter_username, Icons.twitter)}
              {socialInfo(user.twitter_username)}
            </Flex>
            <Flex gap={4} marginBottom="1rem">
              {svgIcon(user.company, Icons.company)}
              {socialInfo(user.company)}
            </Flex>
          </GridItem>
        </Show>
        <Show breakpoint="(min-width: 1024px)">
          <GridItem area={"avatar"}>
            {user && (
              <Image
                src={user.avatar_url}
                borderRadius="50%"
                w="117px"
                h="117px"
              />
            )}
          </GridItem>
          <GridItem area={"user-info"}>
            {user && <Heading as="h2">{user.name}</Heading>}
            {
              <Text fontSize="1.6rem" color="blue" margin="0.5rem 0">
                {user.login !== undefined ? "@" + user.login : ""}
              </Text>
            }
            {
              <Text fontSize="1.5rem">
                {user.created_at !== undefined ? "Joined " + formattedDate : ""}
              </Text>
            }
          </GridItem>
          <GridItem area={"summary"} colStart={2}>
            {user && <Text fontSize="1.5rem">{user.bio}</Text>}
          </GridItem>
          <GridItem area={"dashboard"} colStart={2}>
            <Flex
              backgroundColor={colorMode === "dark" ? "#141d2f" : "#f6f8ff"}
              borderRadius="15px"
              justifyContent="space-evenly"
              alignItems="center"
              padding="0.8rem"
              h="85px"
            >
              <Box textAlign="center">
                <Text fontSize="1.3rem">
                  {user && user.id !== undefined ? "Repos" : ""}
                </Text>
                {user && (
                  <Text fontSize="2.2rem" fontWeight="bold">
                    {user.public_repos}
                  </Text>
                )}
              </Box>
              <Box textAlign="center">
                <Text fontSize="1.3rem">
                  {user && user.id !== undefined ? "Followers" : ""}
                </Text>
                {user && (
                  <Text fontSize="2.2rem" fontWeight="bold">
                    {user.followers}
                  </Text>
                )}
              </Box>
              <Box textAlign="center">
                <Text fontSize="1.3rem">
                  {user && user.id !== undefined ? "Following" : ""}
                </Text>
                {user && (
                  <Text fontSize="2.2rem" fontWeight="bold">
                    {user.following}
                  </Text>
                )}
              </Box>
            </Flex>
          </GridItem>
        </Show>
        <Show breakpoint="(min-width: 768px)">
          <GridItem area={"socials"} margin="auto">
            <Box display="inline-block">
              <Flex gap={4} marginBottom="1rem">
                {svgIcon(user.location, Icons.location)}
                {socialInfo(user.location)}
              </Flex>
              <Flex gap={4} marginBottom="1rem">
                {svgIcon(user.blog, Icons.blog)}
                {
                  <Link
                    href={user.blog}
                    fontSize="1.3rem"
                    isExternal
                    color={
                      user && user.blog !== undefined
                        ? colorTheme.toString()
                        : Colors.missingItem
                    }
                  >
                    {user && user.blog !== undefined
                      ? user.blog
                      : "Not Available"}
                  </Link>
                }
              </Flex>
            </Box>
            <Box display="inline-block" marginLeft="10rem">
              <Flex gap={4} marginBottom="1rem">
                {svgIcon(user.twitter_username, Icons.twitter)}
                {socialInfo(user.twitter_username)}
              </Flex>
              <Flex gap={4} marginBottom="1rem">
                {svgIcon(user.company, Icons.company)}
                {socialInfo(user.company)}
              </Flex>
            </Box>
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default UseInfoContent;
