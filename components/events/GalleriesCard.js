import { Box, Image,Spacer, Button, Text, Link } from "@chakra-ui/react"
import styles from "@styles/Events.module.css"

export default function CurrentEventsCard({ gallery }) {
    const { title, croppedDescription, description, buttonText, imageUrl, imageAlt, href, externalUrl } = gallery;
    
    return (
        <Box>
            <Box className={styles.container}>
                <Image className={styles.image} src={imageUrl} alt={imageAlt} />
                <Box className={styles.overlay}>
                    <Box className={styles.text}>
                        <Text className={styles.title}>{title}</Text>
                        <Text className={styles.body}>{croppedDescription}</Text>
                    </Box>
                </Box>
                <Box className={styles.overlay2}>
                    <Box className={styles.text}>
                        <Text className={styles.title}>{title}</Text>
                        <br />
                        <Text className={styles.body2}>{description}</Text>
                    </Box>
                </Box>
                <Box className={styles.btn}>
                    <Button borderRadius="0" _hover={{opacity: "0.7"}} size="sm" variant="outline">
                        <Link style={{textDecoration: "none"}} href={externalUrl} isExternal>{buttonText}</Link>
                    </Button>
                </Box>
            </Box>
            <Spacer />
        </Box>
    );
}