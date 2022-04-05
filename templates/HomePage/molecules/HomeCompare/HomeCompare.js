import { Box, Flex } from 'atoms'
import { CompareCard } from 'molecules'
import Image from 'next/image'
import React from 'react'

const points = [
  'Compare with any website',
  'Compare insights',
  'Compare insights',
  'Compare insights',
  'Compare insights'
]

export const HomeCompare = () => {
  return (
    <Box pt={{md: '15.3rem'}} pb={{xs: '10rem', md: '12rem'}} ml={{sm: '2.7rem', md: '0'}}>
      <Box maxWidth={{xs: '36rem', md: '107rem'}} ml={{md: 'auto'}} mr={ {md: 'auto'}}>        
        <Box
          display={{xs: 'flex', md: 'grid'}}
          gridTemplateColumns={'1fr 1fr'}   
          flexDirection={{xs: 'column-reverse'}}            
        >
          <CompareCard/>

          <Box ml='3rem'>
            <Box
              width={{xs: '36rem', md: '51.9rem'}}
              fontSize={{xs: '2rem', md: '3.5rem'}}
              fontWeight='600'
              lineHeight={{xs: '3rem', md: '5.2rem'}}
              color='#495057'   
              mt={{xs: '1.5rem', md: '0.6rem'}}         
            >
              Compare to understand your shortcomings over time
            </Box>
            <Box
              maxWidth={{xs: '35.5rem', md: '48.7rem'}}
              fontSize={{xs: '1.3rem', md: '1.4rem'}}
              fontWeight='400'
              lineHeight={{xs: '1.9rem', md: '2.2'}}
              color='#808080'
              mt={{xs: '1.8rem', md:'2.2rem'}}
            >
                Try it now and get insights and data that can be used to create a better user experience for website visitors. Try it now and get insights and data that can be used to create a better user experience for website visitors.
            </Box>
            <Box mt={{xs:'1.6rem', md: '3.1rem'}}>
              <Flex
                  flexDirection='column'
              >
                  {
                      points.map((point, index) => (
                          <Flex
                              alignItems='center'
                              py='1.2rem'
                          >
                              <Flex
                                  height={{xs: '1.5rem', md: '1.7rem'}}
                                  width={{xs: '1.5rem', md: '1.7rem'}}
                                  borderRadius='0.4rem'
                                  background='rgba(90, 111, 240, 0.2)'     
                                  justifyContent='center'                                                                                           
                              >
                                  <Box
                                      width={{xs: '0.78rem', md: '0.9rem'}}
                                      height={{xs: '0.6rem', md: '0.7rem'}}
                                      mt={{xs:'0.1rem', md:'0.3rem'}}                                                     
                                  >
                                      <Image
                                          src='/images/check-mark-blue.svg'                                                    
                                          height={100}
                                          width={100}
                                      />
                                  </Box>
                              </Flex>
                              <Box 
                                  ml={{xs: '1.5rem', md: '2rem'}}
                                  fontSize={{xs: '1.2rem', md: '1.3rem'}}
                                  lineHeight={{xs: '1.8rem', md: '1.9rem'}}
                                  fontWeight='500'
                                  color='rgba(73, 80, 87, 1)'
                              >
                                  {point}
                              </Box>
                          </Flex>
                      ))
                  }                                
              </Flex>
            </Box>
            <Flex 
              mt={{xs: '3.7rem', md: '3.5rem'}}
              width={{xs: '36rem', md: '19.6rem'}}
              height={{xs: '3.6rem', md: '4rem'}}
              fontSize={{xs: '1.2rem', md: '1.3rem'}}
              fontWeight='500'
              lineHeight={{xs: '1.8rem', md: '1.9rem'}}
              background='#6369F0'
              boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'
              borderRadius='0.4rem'
              color='#fff'
              alignItems='center'
              justifyContent='center'
              mr={{xs:'2.7rem', md: '0'}}
            >
              Get Started
            </Flex>
          </Box>

        </Box>      
      </Box>
      <Box
        width={{xs: '2.6rem', md: '6.1rem'}}
        height={{xs: '2.6rem', md: '6.1rem'}}
        background='#66A0EC'
        position='absolute'    
        borderRadius='50%' 
        left={{xs: '2.9rem', md: '10rem'}}
        top={{xs: '52.3rem', md: '9.6rem'}}
      />
      <Box
        width={{xs: '11.1rem', md: '20rem'}}
        height={{xs: '11.1rem', md: '20rem'}}
        background='#F1B44C'
        position='absolute'    
        borderRadius='50%' 
        left={{xs: '0.6rem', md: '7.9rem' }}
        zIndex='-1'        
        top={{xs: '79rem', md: '60rem'}}
      />
    </Box>
  )
}
