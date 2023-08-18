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
    <Container maxW={'1170px'} p="12">
      <Heading fontSize={'46px'} textAlign={'center'} as="h1">About us</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        gap={'0px'}>
        <Box
          display="flex"
          flex="1"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                src={AboutusImg}
                alt="some good alt text"
                style={{
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
        marginLeft={'-30px'}
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Text
            as="p"
            marginTop="2"
            color={'#888888'}
            fontSize="lg">
              NGC foundation was birthed in 2019 but became recognized and registered as a non-governmental organization in 2020 with the sole aim of reducing the educational barrier amongst children in local communities and orphanage homes, implementing feeding programs and sensitizing children on health matters as well as providing medical care.
          </Text>
          <br />
          <br />
          <Text
            as="p"
            marginTop="13px"
            mb={'15px'}
            color={'#888888'}
            fontSize="lg">
              Children are the leaders of tomorrow but this will just remain a statement if the children are not given an opportunity to develop, evolve, learn, relearn and be educated in a conducive environment with knowledgeable teachers in other to achieve great things in the society and extinguish the possibility of becoming a burden in the society.
          </Text>
          <XButton title={'Learn  more'}/>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutSection
