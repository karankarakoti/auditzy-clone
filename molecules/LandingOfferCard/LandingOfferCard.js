import { Box, Flex, Grid, Text } from 'atoms'
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

export const LandingOfferCard = () => {
    return (
        <>
            <Box
                borderRadius='1.5rem'
                width='58%'
                ml='42rem'
                pb='3rem'
                background='rgb(255, 255, 255)'
                boxShadow='rgb(0 0 0 / 15%) 0px 2px 20px'
            >
                <Grid
                    gridTemplateColumns='repeat(2, 1fr)'
                    gridColumnGap='3rem'
                    gridRowGap='2rem'
                    ml='8rem'
                    pt='6rem'
                    pr='4rem'
                >
                    {
                        offer1.map((item, index) => (
                            <Box key={index}>
                                <Flex>
                                    <Flex
                                        borderRadius='0.4rem'
                                        height='1.7rem'
                                        width='1.7rem'                                    
                                        background='rgba(52, 195, 143, 0.3)'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        <Box
                                            height='0.9rem'
                                            width='0.9rem'
                                        >
                                            <Image
                                                src='/images/check-mark-green.svg'
                                                width={'100%'}
                                                height={'100%'}                                            
                                            />
                                        </Box>
                                    </Flex>
                                    <Box
                                        fontSize='1.4rem'
                                        ml='2rem'
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
                <Box
                    background='rgba(0, 0, 0, 0.1)'                
                    height={2}
                    width='64rem'
                    mt='3.5rem'
                    mx='auto'
                />
                <Box
                    mt='2rem'
                    ml='8rem'
                >
                    <Box
                        fontSize='1.6rem'
                        color='rgb(73, 80, 87)'
                        fontWeight='600'
                    >
                        Get further insights about:
                    </Box>
                    <Grid
                        gridTemplateColumns='repeat(2, 1fr)'
                        gridColumnGap='3rem'
                        gridRowGap='2rem'                    
                        pt='4rem'
                        pr='4rem'
                    >
                        {
                            offer2.map((item, index) => (
                                <Box key={index}>
                                    <Flex>
                                        <Flex
                                            borderRadius='0.4rem'
                                            height='1.7rem'
                                            width='1.7rem'                                        
                                            background='rgba(52, 195, 143, 0.3)'
                                            alignItems='center'
                                            justifyContent='center'
                                        >
                                            <Box
                                                height='0.9rem'
                                                width='0.9rem'
                                            >
                                                <Image
                                                    src='/images/check-mark-green.svg'
                                                    width={'100%'}
                                                    height={'100%'}                                            
                                                />
                                            </Box>
                                        </Flex>
                                        <Box
                                            fontSize='1.4rem'
                                            ml='2rem'
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
                        borderRadius='0.4rem'
                        boxShadow = '0px 4px 30px rgba(0, 0, 0, 0.2)'
                        height='4rem'
                        width='19.6rem'
                        mt='3.7rem'
                        backgroundImage='linear-gradient(107.97deg, rgb(81, 84, 201) 24.63%, rgb(90, 111, 240) 83.03%)'
                        fonrSize='1.3rem'
                        fontWeight='500'
                    >
                    Audit Now  
                    </Flex>
                </Box>            
            </Box>
            <Box
                top='52.5rem'
                left='19rem'
                position='absolute'
            >                
                <Box                
                    borderRadius="1.5rem"
                    background='rgb(255, 255, 255)'
                    boxShadow= 'rgb(0 0 0 / 15%) 0px 1px 50px'                                                
                    width="26.1rem"
                    height="23.3rem"
                    zIndex='2'
                    mb='1.6rem'
                >                
                    <Box
                        fontWeight= '600'
                        fontSize='2.5rem'
                        lineHeight='3.7rem'
                        color='rgba(73, 80, 87, 1)'
                        textAlign='center'
                        pt='1rem'
                    >Pagespeed</Box>
                    <Box
                        height='0.4rem'
                        mt='0.5rem'
                        background='rgb(232, 232, 232)'
                        width='100%'
                    />                
                    <Box
                        fontSize='7rem'
                        color='rgba(52, 195, 143, 1)'
                        textAlign='center'
                        fontWeight='600'

                    >   
                        96
                        <Text
                            as='span'
                            fontSize='2.3rem'                            
                        >%</Text>
                    </Box>
                    <Box
                        fontWeight= '600'
                        fontSize='2rem'
                        ml='4.2rem'                    
                        color='rgb(52, 195, 143)'                    
                    >Good</Box>
                    <Box
                        height='0.4rem'
                        width='18.4rem'
                        ml='4.2rem'
                        backgroundImage='linear-gradient(90deg, rgb(147, 235, 203) 0%, rgb(52, 195, 143) 73.44%)'
                    />
                </Box>                 
                <Box                
                    borderRadius="1.5rem"
                    background='rgb(255, 255, 255)'
                    boxShadow= 'rgb(0 0 0 / 15%) 0px 1px 50px'                                                
                    width="25.5rem"
                    height="22.8rem"
                    zIndex='2'
                    mb='1rem'
                >                
                    <Box
                        fontWeight= '600'
                        fontSize='2.5rem'
                        lineHeight='3.7rem'
                        color='rgba(73, 80, 87, 1)'
                        textAlign='center'
                        pt='1rem'
                    >FCP</Box>
                    <Box
                        height='0.4rem'
                        mt='0.5rem'
                        background='rgb(232, 232, 232)'
                        width='100%'
                    />                
                    <Box
                        fontSize='7rem'
                        color='rgb(85, 110, 230)'
                        textAlign='center'
                        fontWeight='600'

                    >   
                        1.5s                        
                    </Box>
                    <Box
                        fontWeight= '600'
                        fontSize='2rem'
                        ml='4.2rem'                    
                        color='rgb(52, 195, 143)'                    
                    >Good</Box>
                    <Box
                        height='0.4rem'
                        width='18.4rem'
                        ml='4.2rem'
                        backgroundImage='linear-gradient(90deg, rgb(147, 235, 203) 0%, rgb(52, 195, 143) 73.44%)'
                    />
                </Box>                 
            </Box>
            <Box
                top='50rem'
                left='112rem'
                width='10rem'
                height='10rem'
                zIndex='-1'
                position='absolute'
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'
            />
        </>
    )
}
