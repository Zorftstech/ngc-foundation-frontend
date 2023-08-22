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
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

        <Card transition={'all ease .5s'} 
          _hover={{
              transform: 'scale(1.05)'
            }} height={'330px'} width={'33%'} className='boxCard_3' position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
              <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'}
                _hover={{
                  bg: 'rgba(0,0,0,0.6)'
                }} zIndex={'1'}></Box>
          <CardFooter position={'relative'} zIndex={3}>
            <Stack width={'full'}>
              <Text textAlign={'left'} color={'#fff'} fontSize={'16px'}>I have been owing for so many terms that it affected my studies, thanks to ngc foundation, they paid all my debt.</Text>
            </Stack>
          </CardFooter>
        </Card>

        <Card transition={'all ease .5s'} 
          _hover={{
              transform: 'scale(1.05)'
            }} height={'330px'} width={'33%'} className='boxCard_4' position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
              <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'} 
                _hover={{
                bg: 'rgba(0,0,0,0.6)'
              }} zIndex={'1'}></Box>
              <CardFooter position={'relative'} zIndex={3}>
                <Stack width={'full'}>
                  <Text textAlign={'left'} color={'#fff'} fontSize={'16px'}>We have both been affected by finances but a kind donor was able to come through for us through ngc foundation.</Text>
                </Stack>
              </CardFooter>
        </Card>

        <Card transition={'all ease .5s'} 
          _hover={{
              transform: 'scale(1.05)'
            }} height={'330px'} width={'33%'} className='boxCard_5' position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
            <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'} 
          _hover={{
              bg: 'rgba(0,0,0,0.6)'
            }} zIndex={'1'}></Box>
              <CardFooter position={'relative'} zIndex={3}>
                <Stack width={'full'}>
                  <Text textAlign={'left'} color={'#fff'} fontSize={'16px'}>Taking care of my school fees has been difficult for my family but i am grateful that an ngo like this could help us.</Text>
                </Stack>
              </CardFooter>
        </Card>
      </Stack>
    </Container>
  )
}
