import { Box, Button, Flex, Text } from 'atoms'
import Image from 'next/image'
import ArrowRight from 'public/assets/icons/ArrowRight'
import React from 'react'

export const SMFeatureCard = () => {
    return (
        <Box
            width={{xs: "100%", md: '64.7rem', lg:"111.7rem"}}
            height={{xs: "47.9rem", md: '32.7rem', lg:"42.9rem"}}
            backgroundRepeat="no-repeat"
            backgroundSize="cover" 
            backgroundImage="url('/images/sm-feature-card-bg.png')"
            mx='auto'            
            borderRadius={'1.4rem'}
            top={{xs:'-10rem', md: '-6rem', lg: '-14rem'}}            
        >
            <Flex
                mx={{xs: '5.5rem', md: '4.9rem', lg: '12.3rem'}}
                flexDirection='column'
                pt={{xs: "5.7rem", md: '3.5rem', lg:"7.8rem"}}
            >
                <Box
                    maxWidth={{xs: "26.6rem", md: '50rem', lg:"79.5rem"}}
                    fontSize={{xs: "2.5rem", md: '2.8rem', lg:"4.2rem"}}
                    fontWeight="600"
                    lineHeight={{xs: "3.7rem", md: '4.2rem', lg:"6.3rem"}}
                    color='#fff'
                >
                    Compare your website with your competitor {'  '}
                    <Text 
                        as='span'
                        color='#00FFDD'
                        fontSize={{xs: "3.2rem", md: '4.5rem', lg:"7rem"}}                        
                        fontFamily='Pacifico'
                        fontWeight="400"
                        ml='0.5rem'
                    >
                        now!
                    </Text>   
                </Box>
                <Flex 
                    mt={{xs: '2.8rem', md: '7.2rem'}} 
                    justifyContent='space-between'
                    flexDirection={{xs: 'column', md: 'row'}}
                >
                    <Box
                        width={{xs: "20.5rem", md: '17.5rem', lg:"24.4rem"}}
                        height={{xs: "3.6rem", md: '3.6rem', lg:"5rem"}}
                        boxShadow=' 0px 6px 30px rgba(0, 0, 0, 0.2)'
                    >
                        <Button
                            bg='#06C2C2'
                            borderRadius='0.4rem'
                            height='100%'
                            width='100%'
                            variant='default'
                            border='none'
                        >
                            <Flex 
                                alignItems='center' 
                                justifyContent='space-between' 
                                px={{xs: '1.4rem', md:'1.2rem', lg: '2.4rem'}}                                
                            >
                                <Text
                                    fontSize={{xs: '1.3rem', lg:"1.6rem"}}
                                    fontWeight="500"
                                    lineHeight={{xs:  '1.9rem', lg:"2.4rem"}}
                                    color="#fff"
                                >
                                    Compare Now
                                </Text>

                                <Box display={{xs: 'none', md: 'block', lg: 'none'}}>
                                    <ArrowRight fill='#fff' w='13' h='13'/>
                                </Box>                                 
                                <Box display={{xs: 'block', md: 'none', lg: 'block'}} mt='0.6rem'>
                                    <ArrowRight
                                        fill='#fff'
                                        w='18'
                                        h='18'
                                    />                                
                                </Box>
                            </Flex>
                        </Button>
                    </Box>
                    <Box
                        width={{xs: "100%", md: '25.3rem', lg:"32.3rem"}}
                        height={{xs: "3.6rem", md: '13.6rem', lg:"17.3rem"}}
                        top={{xs: "7rem", md: '-4rem', lg:"-6rem"}}
                    >
                        <Image
                            src='/images/sm-feature-card-img.png'
                            width={323}
                            height={173}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
