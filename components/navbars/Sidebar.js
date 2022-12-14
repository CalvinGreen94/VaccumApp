import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Text,CloseButton, Flex, Image } from "@chakra-ui/react";
import { ImPen, ImHome, ImCalendar, ImUsers, ImEarth, ImPodcast,ImAirplane,ImCoinDollar } from 'react-icons/im'
import { MdSummarize } from 'react-icons/md'
import { GrGallery } from 'react-icons/gr'
import NavItem from "./NavItem";

export default function Sidebar({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box
      pl={5}
      transition="3s ease"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between" mb={20}>
        <Box display={{ base: "none", md: "flex" }}>
          <Text>Place Logo Here</Text>
          {/* <Image src="images/Logo.png" alt="yLogo" w="200px" h="65px" /> */}
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem href="/" icon={ImHome} title="Home"/>
      <NavItem href="about" icon={MdSummarize} title="About" />
      {/* <NavItem href="members" icon={ImUsers} title="Members" /> */}
      <NavItem href="locations" icon={ImAirplane} title="Locations Offered" />
       {/* <NavItem href="galleries" icon={ImCoinDollar} title="Work Offered" /> */}
      {/* <NavItem href="podcast" icon={ImPodcast} title="Podcast" />  */}
      {/* <NavItem href="estates" icon={ImEarth} title="Estates" /> */}
    </Box>
  );
}