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
// import { FaCheckCircle } from 'react-icons/fa'
import CamCards from './Cards'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { Img1, Img2, Img3 } from '@/assets';

const cardInfo = [
	{
		title: 'Back to school project',
		range: 25,
    img: Img1
	},
  {
		title: 'Clean water project',
		range: 15,
    img: Img2
	},
  {
		title: 'Feed a child project',
		range: 8,
    img: Img3
	},
]

export default function Campaign() {
  return (
    <Container maxW={'1170px'} mb={{base: '55px', md: '110px'}}>
      <Stack spacing={2} textAlign="left !important">
        <Heading width={{base: '60%'}} as="h1" fontSize={{base: '30px', md: '48px'}} color={'#494949'}>
          Active Campaign
        </Heading>
      </Stack>

      <Stack mt={10} display={{base: 'block', md: 'none'}}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            loop={true}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="mySwiper"
          >
              {
                cardInfo.map((item, index) => (
                  <SwiperSlide>
                    <CamCards key={index} index={index} item={item}/>
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
            cardInfo.map((item, index) => (
              <CamCards key={index} index={index} item={item}/>
            ))
          }
      </Stack>
    </Container>
  )
}
