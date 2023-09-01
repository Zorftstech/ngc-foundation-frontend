'use client'
import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const Partner = () => {
  return (
    <Box p='3rem 1rem'>
      <Heading 
        textAlign='center' 
        fontSize={{ base: '32px', lg: '48px'}}
        mt={{ base: '1.5rem', lg: '3rem'}}
        >Partnership / Sponsorship</Heading>
      <div className='donate-container'>
          <h3 className='donate-title'>Donate</h3>

          <input type={'text'} placeholder='First name' className='donate-input' />
          <input type={'text'}  placeholder='Last name' className='donate-input' />
          <input type={'email'}  placeholder='Email address' className='donate-input' />
          <textarea placeholder='Message'>

          </textarea>

          <button className='donate-btn'>Send Message</button>
      </div>
    </Box>
  )
}

export default Partner