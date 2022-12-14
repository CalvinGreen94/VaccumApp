import { Box, Heading, Text, Flex, SimpleGrid, Link } from "@chakra-ui/react"
import Head from "next/head"
import GalleriesCard from "@components/events/GalleriesCard"
import galleriesData from "@components/events/galleriesData";

export default function GalleriesPage() {

    return (
        <Box>
            <Head>
                <title>
                    Work | Work Offered
                </title>
            </Head>

            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Cleaning Type Offered
            </Heading>
            
            <Text py={5}>
                This Could Be Your dream clean
            </Text>

            <Box pt={10} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {galleriesData.map((gallery, i) => (
                    <Flex key={i}>
                        <GalleriesCard gallery={gallery} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}