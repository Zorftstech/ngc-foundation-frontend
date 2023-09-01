import React from 'react'
import { Card, CardFooter, Text, Box, Stack, Button } from '@chakra-ui/react'

const BeneficialCard = ({arr, item, index}) => {
  return (
    <Card transition={'all ease .5s'} 
    _hover={{
        transform: 'scale(1.05)'
      }} alignSelf={index == 0 ? 'flex-end' : index == arr?.length - 1 ? 'flex-start' : 'center'} height={{base: '270px', md: '340px'}} width={{base: '100%', md: '33%'}} className={`footerCard_${index + 1}`} position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
        <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'} 
          _hover={{
          bg: 'rgba(0,0,0,0.6)'
        }} zIndex={'1'}></Box>
        <CardFooter position={'relative'} zIndex={3}>
          <Stack width={'full'}>
            <Text textAlign={'left'} color={'#fff'} fontSize={'16px'} fontWeight='600'>{item}</Text>
          </Stack>
        </CardFooter>
  </Card>
  )
}

export default BeneficialCard