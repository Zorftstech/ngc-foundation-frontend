import React from 'react'
import { Card, CardFooter, Text, Box, Stack, Button, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const SdgsCard = ({arr, item, index}) => {
  return (
    <Card transition={'all ease .5s'} 
    mb={{base: '25px'}}
    _hover={{
        transform: 'scale(1.05)'
      }} alignSelf={{md: index == 0 ? 'flex-end' : index == arr?.length - 1 ? 'flex-start' : 'center'}} 
      // height={{base: '300px', md: '340px'}} 
      width={{base: '100%', md: '33%'}}
      bg={'transparent'} 
      border={'1px solid #D6D6D6'} 
      position={'relative'} rounded={'30px'} 
      display={'flex'} 
      justifyContent={'center'}
      p={'40px 30px'}
      >
          <Stack width={'full'} alignItems={'center'}>
            <Box bg={'#3ADC30'} width={'fit-content'} p={{base: '13px', md: '20px'}} rounded={'full'}>
              <Box width={{base: '57px', md: '80px'}}>
                <Image style={{
                  width: '100%'
                }} src={item.img}/>
              </Box>
            </Box>
            <Heading mt={'30px'}>{item.title}</Heading>
            <Text textAlign={'center'} color={'#888'} fontSize={'16px'}>{item.content}</Text>
          </Stack>
  </Card>
  )
}

export default SdgsCard