import { Box, Flex, Text, Grid } from 'atoms'
import { LandingOfferCard } from 'molecules'
import Image from 'next/image'
import React from 'react'

const offer1 = [
    'Perfomance Anaylsis',
    'Time to interactive (TTI) Score',
    'Speed Anaylsis',
    'First Contentful Paint (FCP) Score',
    'Security Vulnerability Anaylsis',
    'Large Contentful Paint (LCP) Score',
    'SEO score Anaylsis',
    'Cummulative Layout Shift (CLS) Score ',
    'Best coding practice Score Analysis',
    'Speed Index (SI) Score',
    'PWA Score Analysis',
    'Total blocking time (TBT) Score'
]

const offer2 = [
    'Technology Analysis',
    'Maintain multiple Portfolios',
    'Industry Trend Analysis',
    'Automated scripting',
    'Industry Trend Analysis',
    'Automated scripting'
]

export const HomeOffer = () => {
    return (
        <Box ml={{ xs:'3rem', md: '0'}}>
            <Box
                pb={{xs: '3.1rem', md: '2rem'}}                
            >
                <Box pb={{md: '6rem'}} pt={{xs: '2rem', md: '4rem'}}>
                    <Text
                        as='h3'
                        fontSize={{xs: '1.5rem', md: '2rem'}}
                        textAlign={{xs: 'start', md: 'center'}}
                        pt={{xs: '0', md: '6rem'}}
                        fontWeight='400'
                        color='rgb(85, 110, 230)'
                    >
                        What more does Auditzy offer 
                    </Text>
                    <Text
                        as='h2'
                        fontSize={{xs: '2rem', md: '4rem'}}
                        maxWidth={{xs: '33rem', md: '102rem'}}
                        mx={{xs: '0', md: 'auto'}}
                        mt={{xs: '1.6rem', md: '2rem'}}
                        fontWeight='600'
                        color='rgb(73, 80, 87)'
                        textAlign={{xs: 'start', md: 'center'}}
                    >
                       Audit and analyze your Website Speed, Performance, Security, SEO and Best Practices 
                    </Text>
                    <Text
                        as='p'
                        fontSize={{xs: '1.3rem', md: '1.6rem'}}
                        textAlign={{xs: 'start', md: 'center'}}
                        maxWidth={{xs: '33rem', md: '51rem'}}
                        mx={{xs: '0', md: 'auto'}}
                        mt={{xs: '2.1rem', md: '1.2rem'}}
                        fontWeight='400'
                        color='rgb(128, 128, 128)'
                    >
                        Try it now and get insights and data that can be used to create a better user experience for website visitors.
                    </Text>
                </Box>

                <Box
                    position='absolute'
                    right={{xs: '-5rem', md: '-18.5rem' }}
                    top={{ xs: '-5rem', md: '0'}}
                    height={{xs: '9.1rem', md: '40rem'}}
                    width={{xs: '9.1rem', md: '40rem'}}
                    mt={{xs: '3rem', md: '5rem'}}
                    borderRadius='50%'
                    zIndex='-1'
                    background='rgba(52, 195, 143, 1)'                    
                />                
            </Box>
            <Box display={{ xs:'block', md: 'none'}}>
                <Box>
                    {
                        offer1.map((item, index) => (
                            <Box key={index}>
                                <Flex mb='3.1rem'>
                                    <Flex
                                        borderRadius='0.4rem'
                                        height='1.5rem'
                                        width='1.5rem'                                    
                                        background='rgba(52, 195, 143, 0.3)'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        <Box
                                            height='0.6rem'
                                            width='0.78rem'
                                            mt='-0.7rem'
                                        >
                                            <Image
                                                src='/images/check-mark-green.svg'
                                                width={100}
                                                height={100}                                            
                                            />
                                        </Box>
                                    </Flex>
                                    <Box
                                        fontSize='1.3rem'
                                        ml='1.4rem'
                                        color='rgb(73, 80, 87)'
                                        fontWeight='500'
                                    >
                                        {item}
                                    </Box>
                                </Flex>
                            </Box>
                        ))
                    }
                </Box>

                <Box                           
                    maxWidth='36rem'
                    mt='4rem'                    
                    border='1px solid #D3D3D3'
                    mr='3rem'
                />

                <Box
                    mt='2.1rem'                    
                >
                    <Box
                        fontSize='1.3rem'
                        color='rgb(73, 80, 87)'
                        fontWeight='600'
                    >
                        Get further insights about:
                    </Box>
                    <Grid
                        gridTemplateColumns='repeat(2, 1fr)'
                        gridColumnGap='1.8rem'
                        gridRowGap='3rem' 
                        pt='2.2rem'
                        mr='2.7rem'                                           
                    >
                        {
                            offer2.map((item, index) => (
                                <Box key={index}>
                                    <Flex>
                                        <Flex
                                            borderRadius='0.4rem'
                                            height='1.5rem'
                                            width='1.5rem'                                        
                                            background='rgba(52, 195, 143, 0.3)'
                                            alignItems='center'
                                            justifyContent='center'
                                        >
                                            <Box
                                                height='0.6rem'
                                                width='0.78rem'
                                                mt='-0.7rem'
                                            >
                                                <Image
                                                    src='/images/check-mark-green.svg'
                                                    width={100}
                                                    height={100}                                            
                                                />
                                            </Box>
                                        </Flex>
                                        <Box
                                            fontSize='1.2rem'
                                            ml='1.1rem'
                                            color='rgb(73, 80, 87)'
                                            fontWeight='500'
                                        >
                                            {item}
                                        </Box>
                                    </Flex>
                                </Box>
                            ))
                        }                
                    </Grid>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        cursor='pointer'
                        color='rgb(255, 255, 255)'
                        borderRadius='0.5rem'
                        boxShadow = '0px 4px 30px rgba(0, 0, 0, 0.2)'
                        height='4rem'
                        maxWidth='36rem'
                        mt='3.6rem'
                        backgroundImage='linear-gradient(107.97deg, rgb(81, 84, 201) 24.63%, rgb(90, 111, 240) 83.03%)'
                        fontSize='1.3rem'
                        fontWeight='500' 
                        mr='2.7rem'                         
                    >
                        Audit Now  
                    </Flex>
                </Box>            
            </Box>
            <LandingOfferCard/>
        </Box>
    )
}
