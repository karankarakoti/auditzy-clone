import { Box, Grid, Flex, Text } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const CompareCard = () => {
    return (
        <Box>          
            <Grid
                gridTemplateColumns={{xs: 'repeat(2, 13.1rem)', lg: 'repeat(2, 24.4rem)'}}
                gridColumnGap={{xs: '1.3rem', lg: '2.4rem'}}
                zIndex='3'
                ml={{xs: '7.0rem', md: '3rem', lg: '5.3rem'}}
                mt={{xs: '7.1rem', md: '2rem'}}
            >
                <Box
                    width={{xs: '13.1rem', lg: '24.4rem'}}
                    height={{xs: '12.0rem', lg: '22.3rem'}}
                    borderRadius={{xs: '0.8rem', lg: '1.5rem'}}
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
                            fontSize={{xs: '1.4rem', lg: '2.5rem'}}
                            fontWeight='600'
                            color='#495057'
                            lineHeight={{xs: '2.1rem', lg: '3.7rem'}}
                            mt={{xs: '0.6rem', lg: '1.1rem'}}
                        >
                            Speed Index
                        </Box>
                        <Box
                            width={{xs: '13.1rem', lg: '24rem'}}
                            height={{xs: '0.2rem', lg:'0.3rem'}}
                            borderRadius={{xs: '0.5rem', lg: '0.1rem'}}
                            background='#E8E8E8'
                            translate='rotate(0.05deg)'
                            mt={{xs: '0.2rem', lg: '0.4rem'}}
                        />
                        <Flex
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            mt={{xs: '0.38rem', lg: '0.7rem'}}
                        >
                            <Box
                                fontSize={{xs: '3.2rem', lg: '6rem'}}
                                fontWeight='600'
                                color='#556EE6'
                                lineHeight={{xs: '4.8rem', lg: '9rem'}}
                            >
                                2.1s
                            </Box>
                            <Flex
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                mt={{xs: '0.5rem', lg:'0.9rem'}}
                            >
                            <Box
                                width={{xs: '1rem', lg: '1.9rem'}}
                                height={{xs: '0.7rem', lg: '1.3rem'}}
                            >
                                <Image
                                    src='/images/arrow-green.svg'
                                    width={100}
                                    height={100}
                                />
                            </Box>
                            <Box
                                color='#34C38F'
                                fontSize={{xs: '1.3rem', lg: '2rem'}}
                                lineHeight={{xs: '1.9rem', lg: '3rem'}}
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
                    width={{xs: '13.1rem', lg: '24.4rem'}}
                    height={{xs: '12.0rem', lg: '22.3rem'}}
                    borderRadius={{xs: '0.8rem', lg: '1.5rem'}}
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
                            fontSize={{xs: '1.4rem', lg: '2.5rem'}}
                            fontWeight='600'
                            color='#495057'
                            lineHeight={{xs: '2.1rem', lg: '3.7rem'}}
                            mt={{xs: '0.6rem', lg: '1.1rem'}}
                        >
                            SEO
                        </Box>
                        <Box
                            width={{xs: '13.1rem', lg: '24rem'}}
                            height={{xs: '0.2rem', lg:'0.3rem'}}
                            borderRadius={{xs: '0.5rem', lg: '0.1rem'}}
                            background='#E8E8E8'
                            translate='rotate(0.05deg)'
                            mt={{xs: '0.2rem', lg: '0.4rem'}}
                        />
                        <Flex
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            mt={{xs: '0.38rem', lg: '0.7rem'}}
                        >
                            <Box
                                fontSize={{xs: '3.2rem', lg: '6rem'}}
                                fontWeight='600'
                                color='#556EE6'
                                lineHeight={{xs: '4.8rem', lg: '9rem'}}
                            >
                                95
                                <Text
                                    as='span' 
                                    fontSize={{xs: '1.2rem', lg:'2.3rem'}}                           
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
                                    width={{xs: '1rem', lg: '1.9rem'}}
                                    height={{xs: '0.7rem', lg: '1.3rem'}}
                                >
                                    <Image
                                        src='/images/arrow-green.svg'
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                                <Box
                                    color='#34C38F'
                                    fontSize={{xs: '1.3rem', lg: '2rem'}}
                                    lineHeight={{xs: '1.9rem', lg: '3rem'}}
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
                width={{xs: '36rem', md: '30.1rem', lg: '56rem'}}
                height={{xs: '19.7rem', md: '19rem', lg: '33rem'}}
                borderRadius={{xs: '0.9rem', md: '0.8rem', lg: '1.5rem'}}
                background= '#FFFFFF'
                boxShadow= '0px 2px 50px rgba(0, 0, 0, 0.2)'
                mt={{xs: '-1.5rem', md: '-1.6rem', lg:'-4rem'}}
                ml={{xs: '2.7rem', md:'-0.9rem', lg: '-1rem'}} 
                mr={{xs: '2.7rem', md: '0'}}             
            >
                <Box
                    width={{ md: '30.1rem', lg: '56rem'}}
                    height={{md: '19rem', lg: '33rem'}}
                    display={{xs: 'none', md: 'block'}}
                >
                    <Image
                        src='/images/landing-compare-img.svg'
                        width={560}
                        height={330}
                    />
                </Box>
                <Box
                    width='36rem'
                    height='19.7rem'
                    display={{xs: 'block', md: 'none'}}
                >
                    <Image
                        src='/images/landing-compare-img.svg'
                        width={360}
                        height={197}
                    />
                </Box>
            </Box>
        </Box>
    )
}
