'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { concept } from '@/assets/donate'

const Careers = () => {
  return (
    <Box padding={'3rem 1rem'}>
        <Box display={'flex'} justifyContent='center' alignItems={'center'} flexDir={{ base: 'column', lg: 'row' }} gap='1rem'>
            <Image src={concept} alt='Careers' />

            <Text fontWeight={'400'} color='#888' mb={'1rem'}>Thank you for considering a career with us! At this time, we are not actively hiring for any positions. We appreciate your interest in joining our team and encourage you to check back periodically for updates on available opportunities.
            </Text>
        </Box>

        <Text fontWeight={'400'} color='#888' mb={'1rem'}> As an innovative and forward-thinking company, we are always on the lookout for talented individuals who can contribute to our mission and vision. While we may not have openings currently, our needs can change, and we believe in fostering a pool of potential candidates who align with our values and goals.
        </Text>

        <Text fontWeight={'400'} color='#888' mb={'1rem'}> In the meantime, we encourage you to explore our website to learn more about our company culture, values, and the impactful work we do. You can also connect with us on social media to stay updated on any future job postings or company announcements. We appreciate your understanding and patience. Should you have any questions or wish to express your interest in working with us, please feel free to contact our HR department at ngcfoundation@gmail.com.
        </Text>

        <Text fontWeight={'400'} color='#888'> Thank you for your interest in becoming a part of our team. We look forward to potentially connecting with you in the future.</Text>
    </Box>
  )
}

export default Careers