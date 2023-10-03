"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { children } from '@/assets/donate'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { ModalBody, useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';
// import { Modak } from 'next/font/google'
import axios from 'axios'

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState({
    email: '',
    amount: '',
    currency: ''
  })


    const initiatePayment = async () => {
      try {
        const response = await axios.post(
          'https://api.paystack.co/transaction/initialize',
          {
            email: data.email,
            amount: data.amount * 100, // Amount in kobo (100 kobo = 1 NGN)
          },
          {
            headers: {
              Authorization: `Bearer sk_test_e6390eb26696c6f8d485bf7430071cd32ab4660f`,
            },
          }
        );
  
        // Redirect to Paystack's payment page
        window.location.href = response.data.data.authorization_url;
      } catch (error) {
        console.error('Payment initiation failed:', error);
      }
    };

  return (
    <div style={{ position: 'relative' }}>
      <Flex my={{base: '0', md: '2rem'}} py={'2rem'} 
        className='donate_container'
        px={{ base: '1rem', lg: '0' }} 
        justifyContent={'center'} alignItems='center' bg={{base: 'unset', md: 'rgba(214, 10, 135, 0.04)'}} 
        flexDir={{ base: 'column', lg: 'row'}}>
        <Image src={children} alt='charity' className='donate-img' />

        <div className='donate-container' id='donate-form'>
          <h3 className='donate-title'>Donate</h3>
            <input style={{backgroundColor: '#fff'}} onChange={(e) => setData({...data, email: e.target.value})} value={data.email} required type={'email'} placeholder='Email address' className='donate-input' />
            <input style={{backgroundColor: '#fff'}} onChange={(e) => setData({...data, amount: e.target.value})} value={data.amount} required type={'text'}  placeholder='Amount' className='donate-input' />
            <select style={{backgroundColor: '#fff'}} onChange={(e) => setData({...data, currency: e.target.value})} placeholder='Currency'>
              <option selected>Naira</option>
            </select>

            <button className='donate-btn' disabled={data.email == '' && data.amount && data .currency} onClick={data.email != '' && data.amount != '' ? onOpen : ''}>Donate</button>
        </div>
      </Flex>

      <Modal size={{base: 'md', md: '2xl'}} onClose={onClose} isOpen={isOpen} isCentered p='5rem 2rem'>
        <ModalOverlay />
        <ModalContent p={{base: '10px', md: '20px'}}>
          <ModalHeader textAlign={'center'}>Bank Transfer</ModalHeader>
          <ModalCloseButton />
          <ModalBody py='1.5rem'>
            <Text fontSize={{base: '14px', md: '16px'}} fontWeight='400'> Account Name</Text>
            <Heading fontSize={{base: '18px', md: '26px'}} fontWeight='700' mb='2.5rem'>Ngozi children foundation</Heading>

            <Text fontSize={{base: '14px', md: '16px'}} fontWeight='400'>Account Number</Text>
            <Heading fontSize={{base: '18px', md: '26px'}} fontWeight='700' mb='2.5rem'>1012351571</Heading>

            <Text fontSize={{base: '14px', md: '16px'}} fontWeight='400'>Bank Name</Text>
            <Heading fontSize={{base: '18px', md: '26px'}} fontWeight='700' mb='1.5rem'>Keystone Bank</Heading>

            <Link href='/success' className='donate-link' >Done</Link>
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default page;