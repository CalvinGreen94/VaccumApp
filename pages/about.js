import Head from 'next/head'
import { Box, Text, Heading, Spacer } from "@chakra-ui/react"

export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    Beau's Cleaning Services | About
                </title>
            </Head>
            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
            About Beau's Cleaning Services
            </Heading>
            
            <Text pt={5}>
            <span style={{color: "black", fontWeight: "500"}}>Beau's Cleaning Services</span>, is dedicated to keeping your space clean with industrial grade equipment. <span style={{color: "black", fontWeight: "500"}}> </span> <br /><br /> Members will receive YappolaAir native tokens in return for purchasing a membership.<br /><br /><span style={{color: "black", fontWeight: "500"}}></span> <Spacer /><span style={{color: "black", fontWeight: "500"}}> <Spacer /></span>  <span style={{color: "black", fontWeight: "500"}}></span> <Spacer />

            </Text>
        </Box>
    )
}