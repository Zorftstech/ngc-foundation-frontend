import React from 'react'
import Image from 'next/image'
import { Container, Grid, Heading, Text, Flex } from '@chakra-ui/layout'
import { imgA, imgB, banner } from '@/assets/portfolio'

const page = () => {
  return (
    <div>
      <Heading 
      textAlign='center' 
      fontSize={{ base: '32px', lg: '48px'}}
      my={{ base: '1rem', lg: '3rem'}}
      >Our Works</Heading>

      <Flex textAlign={'start'} pb='2rem' flexDir={'column'} px='2rem'>
        <Text mb={'1rem'} fontWeight={'400'} color='#888'>Our targets are children in the very rural community in Nigeria, children who have little or nothing to eat and limited access to basic amenities. we are able to achieve our projects through consistent communication with community leaders, our community manager and other managers spend a lot of time going to these communities to source for beneficiaries as well. We have been able to make a tremendous impact in rural communities.</Text>

        <Text fontWeight={'400'} color='#888'>Some of our projects that have been carried out over the years.</Text>

        <Flex justify={'center'} align='center' flexDir={'column'} gap={{ base: '1rem', lg: '2rem'}}>
          <div className="container">
            <div className="Box-A">
              <p className='text-content'>Provided substitute teachers for understaffed schools in Abia state.</p>
            </div>
            <div className="Box-B">
              <p className='text-content'>Fed over 300 poor children in Illorin Nigeria.</p>
            </div>
            <div className="Box-C">
              <p className='text-content'>Organized a seminar for teen boys in a public school on how to be relvant in their society.</p>
            </div>
          </div>

          <Flex gap='1rem' mb={{ base: '0', lg: '2rem'}} width={'100%'} flexDir={{ base: 'column', lg: 'row' }}>
            <div className='box__a'>
              <Text position={'absolute'} bottom='10px' left={'10px'}>Fed over 300 street kids in festac town lagos.</Text>
            </div>
            <div className='box__b'>
              <Text position={'absolute'} bottom='10px' left={'10px'}>Carried out a clothe drive in a community in Abia state.</Text>
            </div>
          </Flex>

          <Image src={banner} alt='banner image' className='banner-img' />

          <Flex gap='1rem' mb={{ base: '1rem', lg: '2rem'}} width={'100%'} flexDir={{ base: 'column', lg: 'row' }}>
            <div className='img__wrapper-b'>
              <Text position={'absolute'} bottom='10px' left={'10px'}>Carried out a pad drive in a remote community with 3 months supply ffor each girl.</Text>
            </div>
            <div className='img__wrapper-a'>
              <Text position={'absolute'} bottom='10px' left={'10px'}>Carried out a seminar on sexual abuse in a community school.</Text>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default page