'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Flex,
  Container
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import BeneficialCard from './BeneficialsCard'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SdgsCard from './SdgsCards';
import { EduImg, FoodImg, HealthImg } from '@/assets';

const cardList = [
  {
    title: 'Quality Education',
    content: 'We provide education in all forms to less privilege children in other to reduce the out of school children.',
    img: EduImg
  },
  {
    title: 'Health & well-being',
    content: 'We provide healthcare for children and family in rural communities, this includes medical services as well.',
    img: HealthImg
  },
  {
    title: 'Zero hunger',
    content: 'Our goal is to reduce the rate of children and families that go to bed hungry by providing food for them.',
    img: FoodImg
  }
]

function PriceWrapper(prop) {
  const { children } = prop

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      className='boxCard'
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

export default function Sdgs() {
  return (
    <Container maxW={'1170px'} mt={20} py={12}>
        <Heading mb={{md: '-80px'}} as="h1" fontSize={{base: '30px', md: '48px'}} color={'#494949'}>
        Our SDG’s
        </Heading>

      <Flex
        height={{md: '600px'}}
        display={{ md: 'flex'}}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        gap={{base: 30}}
        spacing={{ base: 4, lg: 10 }}
        py={10}>
					{
						cardList.map((item, index, items) => (
							<SdgsCard arr={items} item={item} index={index}/>
						))
					}
      </Flex>
    </Container>
  )
}
