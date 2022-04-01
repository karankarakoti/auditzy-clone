import { Box, Grid, Flex, Text } from 'atoms'
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
    <Box pt='15.3rem' pb='12rem'>
      <Box maxWidth='107rem' ml='auto' mr='auto'>        
        <Grid
          gridTemplateColumns='1fr 1fr'        
        >
          <Box>          
            <Grid
              gridTemplateColumns='24.4rem 24.4rem'
              gridColumnGap='2.4rem'
              zIndex='3'
              ml='5.3rem'
              mt='2rem'
            >
              <Box
                width='24.4rem'
                height='22.3rem'
                borderRadius='1.5rem'
                background= '#FFFFFF'
                boxShadow= '0px 1px 50px rgba(0, 0, 0, 0.15)'
                mb='1rem'
              >
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Box
                    fontSize='2.5rem'
                    fontWeight='600'
                    color='#495057'
                    lineHeight='3.7rem'
                    mt='1.1rem'
                  >
                    Speed Index
                  </Box>
                  <Box
                    width='24rem'
                    height='0.3rem'
                    borderRadius='0.1rem'
                    background='#E8E8E8'
                    translate='rotate(0.05deg)'
                    mt='0.4rem'
                  />
                  <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    mt='0.7rem'
                  >
                    <Box
                      fontSize='6rem'
                      fontWeight='600'
                      color='#556EE6'
                      lineHeight='9rem'
                    >
                      2.1s
                    </Box>
                    <Flex
                      flexDirection='column'
                      justifyContent='center'
                      alignItems='center'
                      mt='0.9rem'
                    >
                      <Box
                        width='1.9rem'
                        height='1.3rem'
                      >
                        <Image
                          src='/images/arrow-green.svg'
                          width='100%'
                          height='100%'
                        />
                      </Box>
                      <Box
                        color='#34C38F'
                        fontSize='2rem'
                        lineHeight='3rem'
                        fontWeight='600' 
                        mt='0.2rem'                     
                      >
                        5%
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
              <Box
                width='24.4rem'
                height='22.3rem'
                borderRadius='1.5rem'
                background= '#FFFFFF'
                boxShadow= '0px 1px 50px rgba(0, 0, 0, 0.15)'
                mb='1rem'
              >
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Box
                    fontSize='2.5rem'
                    fontWeight='600'
                    color='#495057'
                    lineHeight='3.7rem'
                    mt='1.1rem'
                  >
                    SEO
                  </Box>
                  <Box
                    width='24rem'
                    height='0.3rem'
                    borderRadius='0.1rem'
                    background='#E8E8E8'
                    translate='rotate(0.05deg)'
                    mt='0.4rem'
                  />
                  <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    mt='0.7rem'
                  >
                    <Box
                      fontSize='6rem'
                      fontWeight='600'
                      color='#556EE6'
                      lineHeight='9rem'                      
                    >
                      95
                      <Text
                        as='span' 
                        fontSize='2.3rem'                           
                      >
                        %
                      </Text>
                    </Box>
                    <Flex
                      flexDirection='column'
                      justifyContent='center'
                      alignItems='center'
                      mt='-0.4rem'
                    >
                      <Box
                        width='1.9rem'
                        height='1.3rem'
                      >
                        <Image
                          src='/images/arrow-green.svg'
                          width='100%'
                          height='100%'
                        />
                      </Box>
                      <Box
                        color='#34C38F'
                        fontSize='2rem'
                        lineHeight='3rem'
                        fontWeight='600' 
                        mt='0.2rem'                     
                      >
                        4%
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Grid>                      
            <Box
              width='56rem'
              height='33rem'
              borderRadius='1.5rem'
              background= '#FFFFFF'
              boxShadow= '0px 2px 50px rgba(0, 0, 0, 0.2)'
              mt='-4rem'
              ml='-1rem'
            >
              <Box
                width='56rem'
                height='33rem'
              >
                <Image
                  src='/images/landing-compare-img.svg'
                  width={560}
                  height={330}
                />
              </Box>
            </Box>
          </Box>

          <Box ml='3rem'>
            <Box
              width='51.9rem'
              fontSize='3.5rem'
              fontWeight='600'
              lineHeight='5.2rem'
              color='#495057'   
              mt='0.6rem'         
            >
              Compare to understand your shortcomings over time
            </Box>
            <Box
              maxWidth='48.7rem'
              fontSize='1.4rem'
              fontWeight='400'
              lineHeight='2.2'
              color='#808080'
              mt='2.2rem'
            >
                Try it now and get insights and data that can be used to create a better user experience for website visitors. Try it now and get insights and data that can be used to create a better user experience for website visitors.
            </Box>
            <Box mt='3.1rem'>
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
                                  height='1.7rem'
                                  width='1.7rem'
                                  borderRadius='0.4rem'
                                  background='rgba(90, 111, 240, 0.2)'     
                                  justifyContent='center'                                                                                           
                              >
                                  <Box
                                      width='0.9rem'
                                      height='0.7rem'  
                                      mt='0.3rem'                                                     
                                  >
                                      <Image
                                          src='/images/check-mark-blue.svg'                                                    
                                          height='100%'
                                          width='100%'                                                        
                                      />
                                  </Box>
                              </Flex>
                              <Box 
                                  ml='2rem'
                                  fontSize='1.3rem'
                                  lineHeight='1.9rem'
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
              mt='3.5rem'
              width='19.6rem'
              height='4rem'
              fontSize='1.3rem'
              fontWeight='500'
              lineHeight='1.9rem'
              background='#6369F0'
              boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'
              borderRadius='0.4rem'
              color='#fff'
              alignItems='center'
              justifyContent='center'
            >
              Get Started
            </Flex>
          </Box>
        </Grid>      
      </Box>
      <Box
        width='6.1rem'
        height='6.1rem'
        background='#66A0EC'
        position='absolute'    
        borderRadius='50%' 
        left='10rem'         
        top='9.6rem'
      />
      <Box
        width='20rem'
        height='20rem'
        background='#F1B44C'
        position='absolute'    
        borderRadius='50%' 
        left='7.9rem' 
        zIndex='-1'        
        top='60rem'
      />
    </Box>
  )
}
