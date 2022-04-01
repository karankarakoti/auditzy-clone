import { Box, Flex } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const LandingFeatureCard = ({name}) => {
  return (
    <Flex
      borderRadius='2rem'
      height='19rem'
      width='19rem'
      boxShadow='rgb(0 0 0 / 10%) 0px 4px 50px'
    >
      <Flex
        mt='2.5rem'        
        alignItems='center'
        flexDirection='column'
      >
        <Box
          width='7rem'
          height='6.4rem'
          background='rgba(102, 77, 207, 0.2)'
          borderRadius='1rem'
        >
          <Box
            height='3.8rem'
            width='3.8rem'            
            mt='1.3rem'
            ml='2rem'
          >
            <Image
              src='/images/landing-feature-icon.png'
              height={'100%'}
              width={'100%'}
            />
          </Box>
        </Box>
        <Box
          fontSize={'1.8rem'}
          px='2rem'
          mt='1.4rem'
          color='rgba(73, 80, 87, 1)'
          textAlign='center'
        >
          {name}
        </Box>
      </Flex>
    </Flex>
  )
}
