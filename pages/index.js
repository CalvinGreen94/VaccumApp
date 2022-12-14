import { useState } from "react"
import { motion } from "framer-motion"
import { cardVariant, parentVariant } from "../motion"
import properties from "@components/data/properties/"
import ProductCard from "@components/mintComp/ProductCard"
import ProductModal from "@components/mintComp/ProductModal"
import { Box, Flex, Center, SimpleGrid, Text, Link, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Spacer } from "@chakra-ui/react"
import Head from "next/head"
import GalleriesCard from "@components/events/GalleriesCard"
import galleriesData from "@components/events/galleriesData";


const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const [modalData, setModalData] = useState(null)

  return (
    <Box>
      <Head>
          <title>
              Beau's Cleaning Services | Home
          </title>
      </Head>

      <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
        {/* <Center><span style={{color: "black", fontWeight: "200"}}>Welcome To Beau's Cleaning Services </span> </Center> */}
        {/* <span style={{color: "black", fontWeight: "200"}}>Business Name</span> */}
      </Heading>
      <Spacer />
      <Box pt={10} pb={20} align="center">
        <MotionSimpleGrid
          mt="4"
          minChildWidth="250px"
          spacing="4em"
          minH="full"
          variants={parentVariant}
          initial="initial"
          animate="animate"
        >
          {properties.map((product, i) => (
            <MotionBox variants={cardVariant} key={i}>
              <ProductCard product={product} setModalData={setModalData} />
            </MotionBox>
          ))}
          </MotionSimpleGrid>
          <ProductModal
            isOpen={modalData ? true : false}
            onClose={() => setModalData(null)}
            modalData={modalData}
          />
      </Box>

        <Box>

            {/* <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'> */}
            <Link href="/about">Please Read About For More Information</Link> related to services offered from Beau's Cleaing Services.
            {/* </Heading> */}

            <Spacer />

            <Text py={5}>
                This Could Be Your Dream Clean
            </Text>

            <Spacer />

            <Box pt={10} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {galleriesData.map((gallery, i) => (
                    <Flex key={i}>
                        <GalleriesCard gallery={gallery} />
                        <Spacer />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
        <Spacer />
        <Spacer />
    </Box>
  );
}
