import {useToast, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput} from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import { ImPhone } from "react-icons/im";    
import { ImEnvelop} from "react-icons/im";
// import taurosABI from "./ABIs/taurosABI.json";
import estatesABI from "../ABIs/estatesABI"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBY() {

  return (
    <CustomContainer>
      <Box fontSize="xl" fontWeight="White" align="left">

      <ImPhone /> (757) 201-2665  <Spacer />
      <Spacer />
        <ImEnvelop  />beau-email@email.com

      </Box>
    </CustomContainer>
  )
}

{/* Opensea button --> move to bottom of the page */ }
{/* <Container>
            <span>
                <Button
                  onClick={(e) => {
                    window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                  }}
                >
                  {CONFIG.MARKETPLACE}
                </Button>
            </span>          
          </Container>               */}