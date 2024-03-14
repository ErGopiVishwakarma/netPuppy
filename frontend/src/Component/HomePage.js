import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import swimmingImage from '../assests/homeImage2.png'
import fightImage from '../assests/homeImage1.png'
import horseRidingImage from '../assests/homeImage3.png'
import seeMoreImage from '../assests/topCenterImage.png'
import seeAllArrow from '../assests/seeAllActivity.png'

const HomePage = () => {
    return (
        <Flex w="90%"  m="auto" boxSizing='borderBox' pb='100px'>
            {/* left section  */}
            <Box w="45%">
                <Box >
                    <Text fontFamily="Mirador"
                        fontSize="30px"
                        fontStyle="italic"
                        fontWeight="900"
                        lineHeight="28px"
                        letterSpacing="0.02em"
                        textAlign="left"
                        noOfLines={3}
                    >
                        Our commitment to all-round development shines in diverse extracurricular activities.
                    </Text>
                    <Text fontSize="30px" color="rgba(96, 189, 187, 1)">( Our Students love that! )</Text>
                </Box>
                <Center >
                    <Image src={swimmingImage} w={'363px'} h={'253'} />
                </Center>
                <Box  w="250px" h="16px" mt="150px" ml="70">
                    <Image src={seeAllArrow} w="100%" />
                </Box>
            </Box>
            {/* middle  */}
            <Box w="20%" ml="40" mr="10" display="flex" justifyContent="center" alignItems="center">
                <Image src={seeMoreImage} w={'160px'} h={'160px'} />
            </Box>
            {/* right  */}
            <Box w="45%">
                <Box m="30" mr="60" mb="60" >
                    <Image src={fightImage} w={'363px'} h={'253'} />
                </Box>
                <Box m="30" ml="60" mt="60" >
                    <Image src={horseRidingImage} w={'363px'} h={'253'} />
                </Box>
            </Box>
        </Flex>
    )
}

export default HomePage