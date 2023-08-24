"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { children } from '@/assets/donate'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { ModalBody, useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';
// import { Modak } from 'next/font/google'

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div style={{ position: 'relative' }} >
      <Flex my='2rem' py={'2rem'} 
        px={{ base: '1rem', lg: '0' }} 
        justifyContent={'center'} alignItems='center' bg={'rgba(214, 10, 135, 0.04)'} 
        flexDir={{ base: 'column', lg: 'row'}}>
        <Image src={children} alt='charity' className='donate-img' />

        <div className='donate-container'>
          <h3 className='donate-title'>Donate</h3>

          <input type={'text'} placeholder='Email address' className='donate-input' />
          <input type={'text'}  placeholder='Amount' className='donate-input' />

          <select placeholder='Currency'>
            <option>Naira</option>
            <option>Dollar</option>
            <option>Pounds</option>
          </select>

          <button className='donate-btn' onClick={onOpen}>Donate</button>
        </div>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered p='1.5rem 2rem'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>Bank Transfer</ModalHeader>
          <ModalCloseButton />
          <ModalBody py='1.5rem'>
            <Text fontSize={'16px'} fontWeight='400'> Account Name</Text>
            <Heading fontSize={'28px'} fontWeight='700' mb='2.5rem'>Ngozi children foundation</Heading>

            <Text fontSize={'16px'} fontWeight='400'>Account Number</Text>
            <Heading fontSize={'28px'} fontWeight='700' mb='2.5rem'>1012351571</Heading>

            <Text fontSize={'16px'} fontWeight='400'>Bank Name</Text>
            <Heading fontSize={'28px'} fontWeight='700' mb='1.5rem'>Keystone Bank</Heading>

            <Link href='/success' className='donate-link' >Done</Link>
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default page;