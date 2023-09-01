import React from 'react'
import { Card, CardFooter, Text, Box, Stack, Button } from '@chakra-ui/react'

const CamCards = ({item, index}) => {
  return (
    <Card transition={'all ease .5s'} 
    _hover={{
        transform: 'scale(1.05)'
      }} height={{base: '320px', md: '400px'}} width={{base: '100%', md: '33%'}} className={`boxCard_${index + 1}`} position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
        <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'} 
          _hover={{
          bg: 'rgba(0,0,0,0.6)'
        }} zIndex={'1'}></Box>
        <CardFooter position={'relative'} zIndex={3}>
          <Stack spacing={5} width={'full'}>
            <Text textAlign={'left'} color={'#fff'} fontSize={'16px'} fontWeight={'bold'}>{item.title}</Text>
            <Box height={3} borderRadius={10} bg={'white'} width={'full'}>
              <Box borderRadius={10} height={'100%'} width={`${item.range}%`} bg={'#3ADC30'}></Box>
            </Box>
            <Button as={'a'} href='donate' margin={'0 auto'} variant='solid' bg='#3ADC30' width={'60%'} color={'#fff'} borderRadius={'20px'} height={'45px'}>Donate</Button>
          </Stack>
        </CardFooter>
  </Card>
  )
}

export default CamCards