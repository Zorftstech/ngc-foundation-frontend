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
    <Container maxW={'1170px'} py={12}>
      <Flex justifyContent={'flex-end'} gap={{base: 10}} flexDirection={{base: 'column', md: 'row'}} position={'relative'} spacing={1}>
        <Stack rounded={20} p={'50px 20px'}  position={{base: 'block', md: 'absolute'}} top={0} height={'fit-content'} margin={'auto'} left={0} bottom={0} width={{base: '100%', md: '400px'}} bg={'#fff'} spacing={4}>
          <Heading>A digital Product design agency</Heading>
          <Stack
            spacing={4}>
              <Input p={'20px 10px'} rounded={'20px'} variant='filled' placeholder='full name' type='text'/>
              <Input p={'20px 10px'} rounded={'20px'} variant='filled' placeholder='email address' type='text'/>
            <XButton width={'full'} title={'send'}/>
          </Stack>
        </Stack>
        <Flex width={{base: '100%', md: '70%'}} height={{base: 'fit-content', md: '530px'}}>
          <Image
            alt={'feature image'}
            src={PartnersImg}
            objectFit={'cover'}
          />
        </Flex>
      </Flex>
    </Container>
  )
}
