'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from '../../assets/logo.png'
import Image from 'next/image'
import XButton from '../tags/XButton'

const Links = ['About us', 'Our works', 'FAQs', 'Donate']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      fontSize={'16px'}
      fontWeight={400}
      color={'#888888'}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: '#3ADC30'
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4}>
        < Container maxW={1170}>
          <Flex padding={'10px 0'} h={'70px'} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
              <Image src={Logo} alt='logo'/>
            </HStack>

            <IconButton
              size={'lg'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={8}/>}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              bg={"transparent"}
            />

              <HStack as={'nav'} spacing={20} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link, i, links) => {
                  if(links.length - 1 === i){
                     return <XButton title={link}/>
                  }else{
                    return <NavLink key={link}>{link}</NavLink>
                  }
                })}
              </HStack>
          </Flex>
        </Container>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  )
}
