import React from 'react'
import { Banner, BannerHeader, CenterText, ColouredText, GridWrapper, Overlay } from './general.styled'
import Image from 'next/image'
import Imag from '../assets/banner.jpeg'
import { PrimaryBtn } from './navbar/Navbar.styled'

const HeroBanner = () => {
  return (
    <div>
      <Banner>
        <Overlay/>
        <GridWrapper>
          <CenterText>
            <BannerHeader>Creating real <ColouredText>impact</ColouredText> in rural communities.</BannerHeader>
            <PrimaryBtn>Join Us</PrimaryBtn>
          </CenterText>
          {/* <Image src={Imag} alt='hello'/> */}
        </GridWrapper>
      </Banner>
    </div>
  )
}

export default HeroBanner