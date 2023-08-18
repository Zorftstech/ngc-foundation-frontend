'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import Banner from '../assets/banner.png'
import XButton from './tags/XButton'
export default function HeroBanner() {
  return (
    <Flex
    className='banner'
      w={'full'}
      h={'91vh'}
      backgroundImage={`url(${Banner})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61))'}>
        <Stack maxW={'80%'} align={'center'} spacing={6}>
          <Text
            textAlign={'center'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '60px' })}>
            Creating real  <span style={{color: '#D60A87'}}>impact</span> in rural communities.
          </Text>
          <Stack direction={'row'}>
            <XButton title={'Join us'}/>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
