import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import learnMoreImage from '../assests/seeAllActivity.png'
import image from '../assests/homeImage5.png'

const HomePage2 = () => {
    return (
        <Flex w={'90%'} m='auto' gap={'80px'} pt={'50px'}>
            <Center>
                <Image src={image} />
            </Center>

            <Flex direction={'column'} >
                <Text fontSize={'40px'} lineHeight={'48px'} letterSpacing={'2%'} color={'#B90124'} fontWeight={'900'}>At Tula’s, we ask, “How can we make school better?”</Text>
                <Text fontFamily={'TT Chocolates Trl'} fontSize={'25px'} lineHeight={'30px'} letterSpacing={'3%'} color={'#000000'} fontWeight={'300'}>Using the latest research on how girls learn best, we designed an innovative modular schedule, personalized for each student. Our girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying here. Develop leadership skills, build compassion, gain responsibility, and prepare to change the world.</Text>
                <Box w="100%" h="16px" mt={'20px'} textAlign={'right'}>
                    <Image src={learnMoreImage}  w="250px" />
                </Box>
            </Flex>
        </Flex>
    )
}

export default HomePage2