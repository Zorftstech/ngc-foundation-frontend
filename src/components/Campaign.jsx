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
import CamCards from './Cards'


const cardInfo = [
	{
		title: 'Back to school project',
		range: 25
	},
  {
		title: 'Back to school project',
		range: 25
	},
  
]

export default function Campaign() {
  return (
    <Container maxW={'1170px'} mt={15} py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize={{base: '30px', md: '48px'}} color={'#494949'}>
          Active Campaign
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

          {/* {
            cardInfo.map((item, index) => (
              <CamCards />
            ))
          } */}

        <Card transition={'all ease .5s'} 
          _hover={{
              transform: 'scale(1.05)'
            }} height={'400px'} width={'33%'} className='boxCard' position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
              <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'}
                _hover={{
                  bg: 'rgba(0,0,0,0.6)'
                }} zIndex={'1'}></Box>
          <CardFooter position={'relative'} zIndex={3}>
            <Stack width={'full'}>
              <Text textAlign={'left'} color={'#fff'} fontSize={'16px'} fontWeight={'bold'}>Back to school project</Text>
              <Box height={3} borderRadius={10} bg={'white'} width={'full'}>
                <Box borderRadius={10} height={'100%'} width={'10%'} bg={'#3ADC30'}></Box>
              </Box>
              <Button margin={'0 auto'} variant='solid' bg='#3ADC30' width={'70%'} color={'#fff'} borderRadius={10} height={'45px'}>Donate</Button>
            </Stack>
          </CardFooter>
        </Card>

        <Card transition={'all ease .5s'} 
          _hover={{
              transform: 'scale(1.05)'
            }} height={'400px'} width={'33%'} className='boxCard_1' position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
              <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'} 
                _hover={{
                bg: 'rgba(0,0,0,0.6)'
              }} zIndex={'1'}></Box>
              <CardFooter position={'relative'} zIndex={3}>
                <Stack width={'full'}>
                  <Text textAlign={'left'} color={'#fff'} fontSize={'16px'} fontWeight={'bold'}>Clean water project</Text>
                  <Box height={3} borderRadius={10} bg={'white'} width={'full'}>
                    <Box borderRadius={10} height={'100%'} width={'25%'} bg={'#3ADC30'}></Box>
                  </Box>
                  <Button margin={'0 auto'} variant='solid' bg='#3ADC30' width={'70%'} color={'#fff'} borderRadius={10} height={'45px'}>Donate</Button>
                </Stack>
              </CardFooter>
        </Card>

        <Card transition={'all ease .5s'} 
          _hover={{
              transform: 'scale(1.05)'
            }} height={'400px'} width={'33%'} className='boxCard_2' position={'relative'} rounded={'20px'} display={'flex'} justifyContent={'flex-end'}>
            <Box transition={'all ease .5s'} width={'100%'} height={'100%'} position={'absolute'} borderRadius={'20px'} bg={'rgba(0,0,0,0.4)'} 
          _hover={{
              bg: 'rgba(0,0,0,0.6)'
            }} zIndex={'1'}></Box>
              <CardFooter position={'relative'} zIndex={3}>
                <Stack width={'full'}>
                  <Text textAlign={'left'} color={'#fff'} fontSize={'16px'} fontWeight={'bold'}>Feed a child project</Text>
                  <Box height={3} borderRadius={10} bg={'white'} width={'full'}>
                    <Box borderRadius={10} height={'100%'} width={'13%'} bg={'#3ADC30'}></Box>
                  </Box>
                  <Button margin={'0 auto'} variant='solid' bg='#3ADC30' width={'70%'} color={'#fff'} borderRadius={10} height={'45px'}>Donate</Button>
                </Stack>
              </CardFooter>
        </Card>
      </Stack>
    </Container>
  )
}
