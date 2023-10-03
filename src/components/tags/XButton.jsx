import { Button } from '@chakra-ui/react'
import React from 'react'

const XButton = ({ variant, width, url, title}) => {
  
  return (
      <Button as={'a'} href={url}  
        width={width ? width : 'fit-content'} 
        color={{base: variant ? '#3ADC30' : '#fff', md: '#fff'}} 
        bg={{base: variant ? 'transparent' : '#3ADC30', md: '#3ADC30'}} 
        border={{base: '1px solid #3ADC30'}} rounded={'full'} 
        padding={{base: '20px 25px', md: '25px 35px'}}
        cursor='pointer'
        fontSize={{base: '16px', md: '19px'}}
        fontWeight={'600'}
        _hover={{
          bg: '#3ABC10',
          transform: 'scale(1.05)'
        }}
      >
        {title}
      </Button>
    )
}

export default XButton