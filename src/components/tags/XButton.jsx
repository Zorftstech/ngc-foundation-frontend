import { Button } from '@chakra-ui/react'
import React from 'react'

const XButton = ({mtp, title}) => {
  return (
      <Button  width={'fit-content'} color={{base: '#3ADC30', md: '#fff'}} bg={{base: 'transparent', md: '#3ADC30'}} border={{base: '1px solid #3ADC30'}} rounded={'full'} padding={{base: '20px 25px', md: '25px 35px'}}>
        {title}
      </Button>
    )
}

export default XButton