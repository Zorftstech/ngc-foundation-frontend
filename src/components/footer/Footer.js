'use client'

import { ReactNode } from 'react'
import Logo from '../../assets/logo.png'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'


const ListHeader = ({ children }) => {
  return (
    <Text color={'#282828'} fontWeight={'500'} fontSize={{base: '18px', md: '24px'}} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={'#3ADC3033'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={1170} px={{base: 10}} py={10}>
        <SimpleGrid
          fontWeight={400}
          fontSize={{base: '15px', md: '17px'}}
          color={'#4A4A4A'}
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={{base: 3, md: 6}}>
            <Box>
              <Image src={Logo} alt='logo'/>
            </Box>
            <Text fontSize={'sm'}>© 2023. All rights reserved.</Text>
          </Stack>
          
          <Stack spacing={{base: 3, md: 9}} align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'/about'}>
              About us
            </Box>
            <Box as="a" href={'/portfolio'}>
              Our works
            </Box>
            <Box as="a" href={'/careers'}>
              Careers
            </Box>
          </Stack>
          <Stack spacing={{base: 3, md: 9}} align={'flex-start'}>
            <ListHeader>Giving Back</ListHeader>
            <Box as="a" href={'/donate'}>
              Donate
            </Box>
            <Box as="a" href={'/partners'}>
              Partner
            </Box>
            <Box as="a" href={'/sponsor'}>
              Sponsor
            </Box>
          </Stack>
          <Stack spacing={{base: 3, md: 9}} align={'flex-start'}>
            <ListHeader>Contact us</ListHeader>
            <Box as="a" href={'#'}>
              FAQs
            </Box>
            <Box as="a" href={'mailto:ngchildrenfoundation@gmail.com'}>
              Email
            </Box>
            <Box as="a" href={'https://instagram.com/ngcfoundation_?igshid=NTc4MTIwNjQ2YQ=='}>
              Instagram
            </Box>
            <Box as="a" href={'https://www.facebook.com/NGChildrenfoundation?mibextid=ZbWKwL'}>
              Facebook
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

        <Text textAlign={'center'} mt='5rem'>Powered by  -  <Link href={'https://www.zorftstech.com'} >Zorfts Technologies Ltd</Link></Text>
    </Box>
  )
}
