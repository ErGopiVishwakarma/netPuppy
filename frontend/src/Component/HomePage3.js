import { Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image from '../assests/homeImage6.png'
import whytis1 from '../assests/whytisimage1.png'
import whytis2 from '../assests/whytisimage2.png'
import whytis3 from '../assests/whytisimage3.png'
import whytis4 from '../assests/whytisimage4.png'
import whytis5 from '../assests/whytisimage5.png'

const HomePage3 = () => {
    return (
        <Flex w={'90%'} m={'auto'} direction={'column'} pb={'50px'} >
            <Center>
                <Flex gap={'4px'} fontStyle={'normal'} fontWeight={'900'} fontSize={'50px'} lineHeight={'72px'} textAlign={'center'} w={'300px'}>
                    <Text color={'#202833'}>Why</Text>
                    <Text color={'#B90124'}>TIS?</Text>
                </Flex>
            </Center>
            <Flex gap={'40px'}>
                <Flex direction={'column'} gap={'0'} pr={'50px'}>
                    <Text color={'#202833'} fontSize={'30px'} fontWeight={'700'}>A FOCUS ON...</Text>
                    <Text color={'#B90124'} fontSize={'40px'} fontWeight={'600'} mt={'-40px'} pl={'110px'}>MANAGEMENT</Text>
                    <Text color={'#202833'} fontSize={'20px'} fontWeight={'400'} mt={'0'} pl={'30px'}>Extremely Friendly and Approachable Management. Tula’s International School combines – respect for tradition with a progressive application of modern sciences, academic rigour with a caring heart, and individual appreciation with the warmth of a school community</Text>
                </Flex>
                <Flex>
                    <Image src={image} w={'450px'} />
                </Flex>
                <Flex direction={'column'}>
                    <Flex direction={'column'} gap={"0px"} textAlign={'center'} px={'10px'} py={'5px'} borderRadius={'20px'}>
                        <Image src={whytis1} w={'40px'} m={'auto'} />
                        <Text mt={'1px'} textAlign={'center'} fontSize={'12px'} fontWeight={'500'}>CAMPUS</Text>
                    </Flex>
                    <Flex direction={'column'} gap={"0px"} textAlign={'center'} px={'10px'} py={'5px'} borderRadius={'20px'}>
                        <Image src={whytis2} w={'40px'}  m={'auto'} />
                        <Text mt={'1px'} textAlign={'center'} fontSize={'12px'} fontWeight={'500'}>EXPERT INSTRUCTION</Text>
                    </Flex>
                    <Flex direction={'column'} gap={"0px"} textAlign={'center'} px={'10px'} py={'5px'} borderRadius={'20px'}>
                        <Image src={whytis3} w={'40px'}  m={'auto'} />
                        <Text mt={'1px'} textAlign={'center'} fontSize={'12px'} fontWeight={'500'}>TRAINING METHODS</Text>
                    </Flex>
                    <Flex direction={'column'} gap={"0px"} textAlign={'center'} px={'10px'} py={'5px'} borderRadius={'20px'}> 
                        <Image src={whytis4} w={'40px'}  m={'auto'} />
                        <Text mt={'1px'} textAlign={'center'} fontSize={'12px'} fontWeight={'500'}>RATIO</Text>
                    </Flex>
                    <Flex backgroundColor={'red'} direction={'column'} gap={"0px"} textAlign={'center'} px={'10px'} py={'5px'} borderRadius={'20px'}>
                        <Image src={whytis5} w={'40px'}  m={'auto'} />
                        <Text mt={'1px'} textAlign={'center'} fontSize={'12px'} fontWeight={'500'}>MANAGEMENT</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomePage3