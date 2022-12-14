import { Spacer } from "@chakra-ui/react"

const galleriesData = [
    {
        title: 'Carpet Cleaning',
        croppedDescription: (<><span style={{color: "white", fontWeight: "200"}}>Estimated Time to Complete: <Spacer /> 2 hours </span> </>),
        description: (<>Apr 11, 2022, 4:00 PM UTC<br />New Art City<br /><br />Dante&apos;s Inferno. Canto XIII. Seventh Circle: Violence<br /><br />TaurosDAO Members<br />Submissions open in <a style={{color: "#2E7DAF"}} href='https://discord.com/invite/labyrinthine' target="blank">Discord</a></>),
        buttonText: 'View',
        // imageUrl: 'images/.png',
        imageAlt: 'Carpet Cleaning',
        externalUrl: 'https://.../'
    },
    {
        title: 'All Furniture',
        croppedDescription: (<><span style={{color: "white", fontWeight: "200"}}>Estimated Time to Complete: <Spacer /> 30 minutes</span> </>),
        description: (<>Apr 04, 2022, 4:00 PM UTC<br />New Art City<br /><br />Dante&apos;s Inferno. Canto XII. Sixth Circle: Heresy<br /><br />TaurosDAO Members<br />Submissions open in <a style={{color: "#2E7DAF"}} href='https://discord.com/invite/labyrinthine' target="blank">Discord</a></>),
        buttonText: 'View',
        // imageUrl: 'images/.png',
        imageAlt: 'All Furniture',
        externalUrl: 'https://.../'
    },
    {
        title: 'Car Upholstery',
        croppedDescription: (<><span style={{color: "white", fontWeight: "200"}}>Estimated Time to Complete: <Spacer /> 2 hours</span> </>),
        // description: (<>Mar 21, 2022, 4:00 PM UTC<br />New Art City<br /><br />Dante&apos;s Inferno. Canto XI. Fifth Circle: Wrath<br /><br />TaurosDAO Members<br />Submissions open in <a style={{color: "#2E7DAF"}} href='https://discord.com/invite/labyrinthine' target="blank">Discord</a></>),
        buttonText: 'View',
        // imageUrl: 'images/.png',
        imageAlt: 'Car Upholstery',
        externalUrl: 'https://.../'
    },
    {
        title: 'Mattress Deep Cleaning',
        croppedDescription: (<><span style={{color: "white", fontWeight: "200"}}>Estimated Time to Complete: <Spacer /> 1 hour </span></>),
        // description: (<>Mar 14, 2022, 4:00 PM UTC<br />New Art City<br /><br />Dante&apos;s Inferno. Canto X. Fourth Circle: Avarice<br /><br />TaurosDAO Members<br />Submissions open in <a style={{color: "#2E7DAF"}} href='https://discord.com/invite/labyrinthine' target="blank">Discord</a></>),
        buttonText: 'View',
        // imageUrl: 'images/.png',
        imageAlt: 'Mattress Deep Cleaning',
        externalUrl: 'https://.../'
    },
    {
        title: 'Buff HardWood Floor',
        croppedDescription: (<><span style={{color: "white", fontWeight: "200"}}>Estimated Time to Complete: <Spacer /> 4 hours</span> </>),
        // description: (<>Mar 07, 2022, 4:00 PM UTC<br />New Art City<br /><br />Dante&apos;s Inferno. Canto IX. Third Circle: Gluttony<br /><br />TaurosDAO Members<br />Submissions open in <a style={{color: "#2E7DAF"}} href='https://discord.com/invite/labyrinthine' target="blank">Discord</a></>),
        buttonText: 'View',
        // imageUrl: 'images/.png',
        imageAlt: 'Buff HardWood Floor',
        externalUrl: 'https://.../'
    },
]

export default galleriesData