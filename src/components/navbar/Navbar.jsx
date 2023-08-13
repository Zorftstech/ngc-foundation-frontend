"use client"
import React from 'react'
import Image from 'next/image'
import { Container, Links, ListWrapper, PrimaryBtn, Wrapper, } from './Navbar.styled'
import Link from 'next/link'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
      <div>
        <Container>
          <Wrapper>
            <div><Image src={Logo} alt='logo'/></div>
            <ListWrapper>
              <li><Links href={'hello'}>About Us</Links></li>
              <li><Links href={'hello'}>Our Works</Links></li>
              <li><Links href={'hello'}>FAQs</Links></li>
              <li><Link href={'/'}><PrimaryBtn>Donate</PrimaryBtn></Link></li>
            </ListWrapper>
          </Wrapper>
        </Container>
      </div>
  )
}
export default Navbar
