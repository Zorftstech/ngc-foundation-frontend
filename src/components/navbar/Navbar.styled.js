import Link from "next/link";
import { styled } from "styled-components";

const Logo = styled.img`
  
`
const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  /* height: 60px; */
`

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 80px;
`

const PrimaryBtn = styled.button`
  padding: 17px 35px;
  color: #fff;
  background: #3ADC30;
  border: none;
  border-radius: 50px;
  font-size: 16px
`

export const Links = styled(Link)`
  display: block;
  color: #888;
`

export {
  Container,
  Wrapper,
  ListWrapper,
  PrimaryBtn
}