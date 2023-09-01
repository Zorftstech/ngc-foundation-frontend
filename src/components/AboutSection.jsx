'use client'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
} from '@chakra-ui/react'
import AboutusImg from '../assets/aboutus.png'
import XButton from './tags/XButton'

const AboutSection = () => {
  return (
    <Container maxW={'1170px'} mb={{base: '55px', md: '110px'}}>
      <Heading mt={'5%'} fontSize={{base: '28px', md: '46px'}} textAlign={'center'} as="h1">About us</Heading>
      <Box
        marginTop={{ base: '1', sm: '5%' }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={'20px'}>
          <Box
          flex={1}
            width={{ base: '100%', md: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', md: '0%' }}>
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                src={AboutusImg}
                alt="some good alt text"
                width={'100%'}
                style={{
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </Box>
        </Box>
        <Box
          marginLeft={{base: 0, md: '0px'}}
          display="flex"
          flex="1"
          flexDirection="column"
          alignItems={{base: 'center', md: 'flex-start'}}
          justifyContent="flex-start"
          marginTop={{ base: 10, md: '0' }}>
          <Text
            noOfLines={{base: 4, md: 'unset'}}
            as="p"
            marginTop="2"
            color={'#888888'}
            fontSize="16px"
            mb={{base: 0, md: '20px'}}>
              NGC foundation was birthed in 2019 but became recognized and registered as a non-governmental organization in 2020 with the sole aim of reducing the educational barrier amongst children in local communities and orphanage homes, implementing feeding programs and sensitizing children on health matters as well as providing medical care.
          </Text>

          <Text
            noOfLines={{base: 4, md: 'unset'}}
            as="p"
            marginTop="13px"
            mb={'15px'}
            color={'#888888'}
            fontSize="16px">
              Children are the leaders of tomorrow but this will just remain a statement if the children are not given an opportunity to develop, evolve, learn, relearn and be educated in a conducive environment with knowledgeable teachers in other to achieve great things in the society and extinguish the possibility of becoming a burden in the society.
          </Text>
          <XButton variant={'secondary'} title={'Learn  more'} url={'about'}/>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutSection
