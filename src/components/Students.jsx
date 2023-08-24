'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Input,
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

const cardList = [
	'I have been owing for so many terms that it affected my studies, thanks to ngc foundation, they paid all my debt',
	'We have both been affected by finances but a kind donor was able to come through for us through ngc foundation.',
	'Taking care of my school fees has been difficult for my family but i am grateful that an ngo like this could help us.'
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

export default function Campaign() {
  return (
    <Container maxW={'1170px'} mt={20} py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize={{base: '30px', md: '48px'}} color={'#494949'}>
          Beneficiaries
        </Heading>
      </VStack>

      <Stack mt={10} display={{base: 'block', md: 'none'}}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
              {
                cardList.map((item, index) => (
                  <SwiperSlide>
        							<BeneficialCard item={item} index={index}/>
                  </SwiperSlide>
                ))
              }
          </Swiper>
      </Stack>

      <Stack
        display={{base: 'none', md: 'flex'}}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

					{
						cardList.map((item, index) => (
							<BeneficialCard item={item} index={index}/>
						))
					}
      </Stack>
    </Container>
  )
}
