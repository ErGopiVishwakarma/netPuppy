import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image from '../assests/homeImage11.png'

const HomePage7 = () => {
    return (
        <Box
            mt={'50px'}
            w={'100%'}
            h={'600px'}
            position={'relative'}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Flex w={'100%'} h={'100%'} backgroundColor={'#000000'} opacity={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'100px'}>
                <Flex direction={'column'} m='0' justify={'center'} w={'500px'}>
                    <Text fontSize={'20px'} fontWeight={'700'} color={'#FFFFFF'} textAlign={'start'} >BECOME A PART OF THE...</Text>
                    <Text mt={'0'} fontSize={'35px'} fontWeight={'700'} color={'#A60028'} textAlign={'center'}>TULAS FAMILY</Text>
                    <Text mt={'0'} fontSize={'13px'} fontWeight={'400'} color={'#FFFFFF'} noOfLines={2} textAlign={'center'}>VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR <br></br>Dehradun, Uttarakhand, 248197</Text>
                    <Center>
                        <Flex color={'#FFFFFF'} gap={'70px'} >
                            <Text textAlign={'center'}>(+91) 9458311000</Text>
                            <Text textAlign={'center'}>info@tis.edu.in</Text>
                        </Flex>
                    </Center>
                </Flex>
                <Flex gap={'100px'}>
                    <Flex color={'#FFFFFF'} h={'54px'} w={'214px'} backgroundColor={'#A60028'} justifyContent={'center'} alignItems={'center'}>VIRTUAL TOUR</Flex>
                    <Flex color={'#FFFFFF'} h={'54px'} w={'214px'} backgroundColor={'#A60028'} justifyContent={'center'} alignItems={'center'}>APPLY NOW</Flex>
                    <Flex color={'#FFFFFF'} h={'54px'} w={'214px'} backgroundColor={'#A60028'} justifyContent={'center'} alignItems={'center'}>fedena LOGIN</Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default HomePage7