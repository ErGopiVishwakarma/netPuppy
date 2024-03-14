import React from 'react'
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import awardImage3 from '../assests/homeImage10.png'
import awardImage1 from '../assests/homeImage8.png'
import awardImage2 from '../assests/homeImage9.png'
import seeMoreImage from '../assests/topCenterImage.png'
import seeAllArrow from '../assests/seeAllActivity.png'

const HomeImage5 = () => {
    return (
        <Flex w="90%" m="auto" boxSizing='borderBox' pb='100px' mt={'50px'}>
            {/* left section  */}
            <Box w="45%">
                <Box m="30" mr="60" mb="60" >
                    <Image src={awardImage1} w={'363px'} h={'253'} />
                </Box>
                <Box m="30" ml="60" mt="60" >
                    <Image src={awardImage2} w={'363px'} h={'253'} />
                </Box>
            </Box>
            {/* middle  */}
            <Box w="20%" ml="40" mr="10" display="flex" justifyContent="center" alignItems="center">
                <Image src={seeMoreImage} w={'160px'} h={'160px'} />
            </Box>
            {/* right  */}

            <Box w="45%">
                <Box >
                    <Text fontFamily="Mirador"
                        fontSize="30px"                
                        fontWeight="900"
                        lineHeight="28px"
                        letterSpacing="0.02em"
                        textAlign="left"
                        noOfLines={3}
                        color={'#000000'}
                    >
                    Awards and achievements, gleaming in sight, Honor efforts and perseverance in flight.
                </Text>
                <Text fontSize="16px" mt={'-10px'} color="rgba(96, 189, 187, 1)">(Everybody Loves that)</Text>
            </Box>
            <Center >
                <Image src={awardImage3} w={'363px'} h={'253'} mt={'50px'} />
            </Center>
            <Box w="250px" h="16px" mt="150px" ml="70">
                <Image src={seeAllArrow} w="100%" />
            </Box>
        </Box>
        </Flex>
    )
}

export default HomeImage5