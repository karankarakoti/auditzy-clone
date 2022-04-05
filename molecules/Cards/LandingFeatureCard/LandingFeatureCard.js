import { Box, Flex } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const LandingFeatureCard = ({name}) => {
  return (
    <Flex
      borderRadius={{xs: '1rem', md: '1rem', lg: '2rem'}}
      height={{xs: '14rem', md: '10.7rem', lg: '19rem'}}
      width={{ xs: '10.3rem', md: '10.7rem', lg: '19rem'}}
      boxShadow={{xs: '0px 2px 20px rgba(0, 0, 0, 0.1)', md: '0px 4px 50px rgba(0, 0, 0, 0.1)'}}
    >
      <Flex
        mt={{xs: '2.1rem', lg: '2.5rem'}}        
        alignItems='center'
        flexDirection='column'
      >
        <Box
          width={{xs: '3.6rem', md: '3.8rem', lg: '7rem'}}
          height={{xs: '3.3rem', md: '3.5rem', lg: '6.4rem'}}
          background='rgba(102, 77, 207, 0.2)'
          borderRadius={{xs: '0.5rem', md: '0.5rem', lg: '1rem'}}
        >
          <Box
            height={{xs: '2.1rem', md: '2rem', lg: '3.8rem'}}
            width={{xs: '1.4rem', md: '1.7rem', lg: '3.8rem'}}
            mt={{xs: '0.7rem', lg: '1.3rem'}}
            ml={{xs: '1rem', md: '1.1rem', lg: '2rem'}}
          >
            <Image
              src='/images/landing-feature-icon.png'
              height={100}
              width={100}
            />
          </Box>
        </Box>
        <Box
          fontSize={{xs:'1.2rem', md: '1rem', lg: '1.8rem'}}
          px={{xs: '1.7rem', md: '1.7rem', lg: '2rem'}}
          mt={{xs: '0.9rem', md: '0.9rem', lg: '1.4rem'}}
          color='rgba(73, 80, 87, 1)'
          textAlign='center'
        >
          {name}
        </Box>
      </Flex>
    </Flex>
  )
}
