import { complete } from '@/assets/donate';
import { Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItems='center' flexDir={'column'} gap='2rem' py='2rem'>
                <Image src={complete} alt='completed' width={400} />
                <Text fontSize={'18px'} fontWeight='600'> Thank you for making a difference.😊</Text>
                <Link href={'/'}>Back to Home</Link>
            </Flex>
        </>
    )
}

export default page;