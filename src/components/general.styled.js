import { styled } from "styled-components";
import BannerImg from '../assets/banner.jpeg'

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
  z-index: -1;
`
const Banner = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  background-image: url({BannerImg});
  background-size: cover;
  color: #fff;
`

const ColouredText = styled.span`
  color: #D60A87;
`

const GridWrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`

const CenterText = styled.div`
  text-align: center;
  max-width: 70%;
`

const BannerHeader = styled.h1`
  font-size: 64px;
  margin-bottom: 40px;
  /* line-height:  */
`
export {
  Banner,
  Overlay,
  GridWrapper,
  ColouredText,
  CenterText,
  BannerHeader
}