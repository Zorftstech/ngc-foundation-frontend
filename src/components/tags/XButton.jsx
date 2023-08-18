import { Button } from '@chakra-ui/react'
import React from 'react'

const XButton = ({mtp, title}) => {
  return (
      <Button width={'fit-content'} color={'#fff'} bg={'#3ADC30'} rounded={'full'} padding={'25px 35px'}>
        {title}
      </Button>
    )
}

export default XButton