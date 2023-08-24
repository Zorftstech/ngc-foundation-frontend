import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const qanda = [
  {
    question: 'Does NGC Foundation operate across Nigeria?',
    answer: 'Yes we do!'
  },
  {
    question: 'Can NGC Foundation receive international transfers?',
    answer: 'Yes we do!'
  },
  {
    question: 'Does the Ngo carry out tech related projects?',
    answer: 'we absolutely do!'
  },
  {
    question: 'Can i be a volunteer even when there is no opening?',
    answer: 'yes we always accept volunteers, kindly send an email to us.'
  },
]
const page = () => {
  return (
    <div>
      <Heading 
      textAlign='center' 
      fontSize={{ base: '32px', lg: '48px'}}
      mt={{ base: '1.5rem', lg: '3rem'}}
      >FAQs</Heading>

      <Flex justify={'center'} align='center' flexDir={'column'} my='2.5rem' py='2rem' px='10px' >
        {qanda.slice(0, 5).map((item, index) => (
          <Box key={index} 
          w={{ base: '100%', lg: '840px'}} 
          borderRadius='30px' 
          bg='rgba(214, 10, 135, 0.04)' 
          py={{ base: '20px', lg: '42px'}} px={{ base: '1rem', md: '2.5rem', lg: '6rem' }} my='1rem'>
            <Flex justifyContent={'start'} alignItems='start' gap={'10px'}>
              <Box bg='#3ADC30' w={'20px'} h='20px' borderRadius={'50%'} />
  
              <Box>
                <Text fontWeight={'600'} fontSize='17px'>{item.question}</Text>
                <Text fontWeight='400' color='#6D6D6D' >{item.answer}</Text>
              </Box>
            </Flex>
          </Box>
        ))}

      </Flex>
    </div>
  )
}

export default page