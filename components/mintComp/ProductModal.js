import { Box, Modal, ModalOverlay, ModalContent,Spacer, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Grid, GridItem } from "@chakra-ui/react";
import MBE from "./MintButtonEstatesv2";
// import MBT from "./MintButtonTaurosV2";
import Image from "next/image";
import MBY from "./MintButtonTaurosV2";
export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, free, presalePrice, salePrice, imageUrl, imageAlt, description, unclaimed, glb } = modalData || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent rounded="xl">
        <ModalCloseButton />
        <ModalHeader>{title == "Beau's Cleaning Services" ? "dNFT Details" : "Contact Information"}</ModalHeader>
        <ModalBody>
        <Grid
          height={{base: "140", md: "125"}}
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(9, 1fr)'
        >
          <GridItem rowSpan={3} colSpan={5}>
            {/* <video
                    autoPlay
                    muted
                    src={imageUrl}
                    alt={imageAlt}
                    objectfit="cover"
                    layout="fill"
                  /> */}
            <Image
                    // autoPlay
                    // muted
                    src={imageUrl}
                    alt={imageAlt}
                    objectfit="cover"
                    layout="fixed"
                    // fill,fixed,intrinsic,responsive,undefined
                    width={250}
                    height={250}
                  />
          </GridItem>
          <GridItem rowSpan={2} colSpan={4} boxShadow="inner" pl="4" rounded="2xl" textColor="white" textShadow='0.5px 0.5px gray'>
            <Box fontSize={{base: "14px", md: "20px"}} fontWeight="semibold" color="white">{description}</Box>
            <Box fontWeight="light" fontSize={{base: "13px", md: "18px"}}>
              {/* <Box>{title == "YappolaAir Membership" ? free : salePrice}</Box> */}
            </Box>
          </GridItem>
        </Grid>
        </ModalBody>
        <ModalFooter>
          <Spacer />

            <Box pb="10">
            {title == "Business Card" ? <MBE /> : <MBY />}
            </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}