import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image from '../assests/trophy.png'
import arrow from '../assests/arrow.png'

const HomePage6 = () => {
    return (
        <Flex px={'5%'} py={'80px'} backgroundColor={'#F8F5F0'} alignItems={'center'} gap={'30px'}>
            <Flex w={'338px'} justifyContent={'center'} border={'2px solid #B90124'} borderRadius={'10px'} direction={'column'} alignItems={'center'}>
                <Image src={image} w={'139px'} h='139px' mt={'20px'} />
                <Text color={'#B90124'} fontWeight={'900'} fontStyle={'italic'} fontSize={'30px'}>Our Rankings</Text>
                <Text mt={'0'} color={'#000000'} fontWeight={'500'}  fontSize={'20px'}>Top Boarding School</Text>
            </Flex>
            <Image src={arrow}  w={'70px'} h={'90px'} />
            <Flex direction={'column'} backgroundColor={'#B90124'} w={'248px'} h={'228px'}>
                <Text color={'#FFFFFF'} fontWeight={'900'} fontStyle={'italic'} fontSize={'30px'} fontFamily={'Mirador'} textAlign={'center'}>#1</Text>
                <Text mt={'0'} color={'#FFFFFF'} fontWeight={'900'} fontStyle={'italic'} fontSize={'25px'} fontFamily={'Mirador'} textAlign={'center'}>In Dehradun</Text>
                <Text mt={'0'} fontFamily={'TT Chocolates Trl'} fontSize={'15px'} lineHeight={'18px'} textAlign={'center'}>Co-Educational Boarding School in Dehradun by Education Today 2020</Text>
            </Flex>
            <Flex direction={'column'} backgroundColor={'#B90124'} w={'248px'} h={'228px'}>
                <Text color={'#FFFFFF'} fontWeight={'900'} fontStyle={'italic'} fontSize={'30px'} fontFamily={'Mirador'} textAlign={'center'}>#2</Text>
                <Text mt={'0'} color={'#FFFFFF'} fontWeight={'900'} fontStyle={'italic'} fontSize={'25px'} fontFamily={'Mirador'} textAlign={'center'} >In Uttarakhand</Text>
                <Text mt={'0'} fontFamily={'TT Chocolates Trl'} fontSize={'15px'} lineHeight={'18px'} textAlign={'center'}>Co-Educational Boarding School in India by Education Today 2020</Text>
            </Flex>
            <Flex direction={'column'} backgroundColor={'#B90124'}  w={'248px'} h={'228px'}>
                <Text color={'#FFFFFF'} fontWeight={'900'} fontStyle={'italic'} fontSize={'30px'} fontFamily={'Mirador'} textAlign={'center'}>#3</Text>
                <Text mt={'0'} color={'#FFFFFF'} fontWeight={'900'} fontStyle={'italic'} fontSize={'25px'} fontFamily={'Mirador'} textAlign={'center'}>In India</Text>
                <Text mt={'0'} fontFamily={'TT Chocolates Trl'} fontSize={'15px'} lineHeight={'18px'} textAlign={'center'}>Co-Educational Boarding School in India by Education Today 2020</Text>
            </Flex>
        </Flex>
    )
}

export default HomePage6