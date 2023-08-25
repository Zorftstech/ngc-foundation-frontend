'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
	Box,
	LinkBox,
} from '@chakra-ui/react'
import WomenImage from "../assets/WomenImage.png";
import Link from 'next/link'
import Image from 'next/image';

export default function Beneficiaries () {
  return (
    <Stack mb={{base: '55px', md: '110px'}} minH={'60vh'} direction={{ base: 'column', md: 'row' }} bg={'#D507860F'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'2xl'}>
					<Box textAlign={{base: 'center'}}>
	 					<Heading as={'h3'} fontSize={{base: '28px', md: '36px'}}>
	 						See how we are making a difference in our<br/>
	 						community.
	 					</Heading>
	 					<Text color={'#888888'} fontSize={'16px'}>
	 						we have been making tremendeous difference in our community
	 						and around our country
	 					</Text>

						<LinkBox mt={5} color={'#3ADC30'}>Learn more</LinkBox>
					</Box>
        </Stack>
      </Flex>

      <Flex flex={1} px={{base: '20px'}}>
        <Image
        style={{objectFit: 'cover'}}
          alt={'Login Image'}
          src={WomenImage}
        />
      </Flex>
    </Stack>
  )
}
