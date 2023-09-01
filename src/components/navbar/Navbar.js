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

const Links = ['About us', 'Our works', 'FAQs', 'Donate', 'Sponsors', 'Partners', 'Careers' ]
const Navigate = ['about', 'portfolio', 'faqs', 'donate', 'partners', 'partners', 'careers' ]

const NavLink = ({link, index}) => {
  // const { children, index } = props
  console.log(index)

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
      href={Navigate[index]}
      >
      {link}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4}>
        <Container Container maxW={1170}>
          <Flex padding={'10px 0'} h={'70px'} alignItems={'center'} justifyContent={'space-between'}>
            <HStack as={'a'} href='/' spacing={8} alignItems={'center'}>
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
                     return <XButton title={link} url={'/donate'} />
                  }else{
                    return <NavLink key={link} index={i} link={link}/>
                  }
                })}
              </HStack>
          </Flex>
        </Container>

        {isOpen ? (
          <Box  height={'100vh'} zIndex={10} p={'20px 30px 0'} width={'100%'} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={link} link={link} index={i}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  )
}
