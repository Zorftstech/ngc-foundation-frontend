import React from 'react'
import { Card, CardFooter, Text, Box, Stack, Button } from '@chakra-ui/react'

const SdgsCard = ({arr, item, index}) => {
  return (
    <Card transition={'all ease .5s'} 
    _hover={{
        transform: 'scale(1.05)'
      }} alignSelf={index == 0 ? 'flex-end' : index == arr?.length - 1 ? 'flex-start' : 'center'} height={'340px'} width={{base: '100%', md: '33%'}} bg={'transparent'} border={'1px solid #D6D6D6'} position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>

        <CardFooter position={'relative'} zIndex={3}>
          <Stack width={'full'}>
            <Text textAlign={'left'} color={'#fff'} fontSize={'16px'}>{item}</Text>
          </Stack>
        </CardFooter>
  </Card>
  )
}

export default SdgsCard