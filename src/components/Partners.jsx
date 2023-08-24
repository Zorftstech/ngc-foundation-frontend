'use client'

import {
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Input,
  Box
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
import Image from 'next/image'
import PartnersImg from '../assets/partners.svg'
import XButton from './tags/XButton'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function Partners() {
  return (
    <Container maxW={'1170px'} my={'100px'}>
        <Heading fontSize={{base: '30px', md: '40px'}} color={'#494949'}>Become a partner and lets make a <br></br> difference together.</Heading>
      <Flex justifyContent={'flex-end'} gap={{base: 10}} flexDirection={{base: 'column', md: 'row'}} position={'relative'} spacing={1}>
        <Stack rounded={20} p={'50px 20px'}  position={{base: 'block', md: 'absolute'}} top={0} height={'fit-content'} margin={'auto'} zIndex={3} left={0} bottom={0} width={{base: '100%', md: '400px'}} bg={'#fff'} spacing={4}>
          <Stack
            spacing={6}>
              <Input p={'30px 10px'} rounded={'20px'} variant='filled' placeholder='full name' type='text'/>
              <Input p={'30px 10px'} rounded={'20px'} variant='filled' placeholder='email address' type='text'/>
            <XButton width={'full'} title={'send'}/>
          </Stack>
        </Stack>
        <Flex width={{base: '100%', md: '70%'}} position={'relative'} height={{base: 'fit-content', md: '530px'}}>
          <Box rounded={'30px'} position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} bg={'rgba(0,0,0,0.4)'}></Box>
          <Image
            style={{width: '100%'}}
            alt={'feature image'}
            src={PartnersImg}
            objectFit={'cover'}
          />
        </Flex>
      </Flex>
    </Container>
  )
}
