"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { children } from '@/assets/donate'
import { Flex } from '@chakra-ui/layout'
import Modal from './modal'
// import { Input } from '@chakra-ui/react'

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const handleOpenModalClick = () => {
    openModal
  }
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

          <button className='donate-btn' onClick={handleOpenModalClick}>Donate</button>
        </div>
      </Flex>

      <Modal open={modalOpen} onClose={closeModal}>
        <div className='modal-content'>
          <h1>Modal here!</h1>
        </div>
      </Modal>
    </div>
  )
}

export default page