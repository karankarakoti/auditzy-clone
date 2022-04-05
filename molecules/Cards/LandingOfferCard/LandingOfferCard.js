import { Box, Button, Flex, Grid, Text } from 'atoms'
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
                borderRadius={{md: '0.8rem', lg: '1.5rem'}}
                width={{md: '43rem', lg: '58%'}}
                ml={{md: '23.8rem', lg:'42rem'}}
                pb={{md: '3rem'}}
                background='rgb(255, 255, 255)'
                boxShadow='rgb(0 0 0 / 15%) 0px 2px 20px' 
                display={{ xs: 'none', md: 'block'}}               
            >
                <Grid
                    gridTemplateColumns='repeat(2, 1fr)'
                    gridColumnGap={{lg: '3rem'}}
                    gridRowGap={{md: '0.5rem', lg:'2rem'}}
                    ml={{md:'3.3rem', lg: '8rem'}}
                    pt={{md: '2.6rem', lg: '6rem'}}
                    pr={{lg:'4rem'}}
                >
                    {
                        offer1.map((item, index) => (
                            <Box key={index}>
                                <Flex alignItems='center'>
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
                                            mt='-0.3rem'
                                        >
                                            <Image
                                                src='/images/check-mark-green.svg'
                                                width={'100%'}
                                                height={'100%'}                                            
                                            />
                                        </Box>
                                    </Flex>
                                    <Box
                                        fontSize={{md: '0.8rem', lg: '1.4rem'}}
                                        ml={{md:'0.4rem', lg: '2rem'}}
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
                    height={{md: 1.1, lg: 2}}
                    width={{md: '37.5rem', lg: '64rem'}}
                    mt={{md:'1.7rem', lg: '3.5rem'}}
                    mx='auto'
                />
                <Box
                    mt={{md:'1rem', lg: '2rem'}}
                    ml={{md:'3.3rem', lg: '8rem'}}
                >
                    <Box
                        fontSize={{md:'1rem', lg: '1.6rem'}}
                        color='rgb(73, 80, 87)'
                        fontWeight='600'
                    >
                        Get further insights about:
                    </Box>
                    <Grid
                        gridTemplateColumns='repeat(2, 1fr)'
                        gridColumnGap={{lg: '3rem'}}
                        gridRowGap={{md: '0.5rem',lg:'2rem'}}
                        pt={{md:'1.2rem', lg: '4rem'}}
                        pr={{lg: '4rem'}}
                    >
                        {
                            offer2.map((item, index) => (
                                <Box key={index}>
                                    <Flex alignItems='center'>
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
                                                mt='-0.3rem'
                                            >
                                                <Image
                                                    src='/images/check-mark-green.svg'
                                                    width={'100%'}
                                                    height={'100%'}                                            
                                                />
                                            </Box>
                                        </Flex>
                                        <Box
                                            fontSize={{md: '0.8rem', lg: '1.4rem'}}
                                            ml={{md:'0.4rem', lg: '2rem'}}
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
                        
                        
                        boxShadow = '0px 4px 30px rgba(0, 0, 0, 0.2)'
                        height={{md: '2.4rem', lg: '4rem'}}
                        width={{md: '11.4rem', lg: '19.6rem'}}
                        mt={{md: '2.4rem', lg: '3.7rem'}}
                        
                    >
                        <Button
                            borderRadius={{md: '0.2rem', lg: '0.4rem'}}
                            backgroundImage='linear-gradient(107.97deg, rgb(81, 84, 201) 24.63%, rgb(90, 111, 240) 83.03%)'
                            height='100%'
                            width='100%'        
                            variant='default'                                        
                            border='none'                        
                        >
                            <Text
                                color='rgb(255, 255, 255)'
                                fontSize={{md: '0.9rem', lg: '1.3rem'}}
                                fontWeight='500'
                            >
                                Audit Now  
                            </Text>                        
                        </Button>
                    </Box>
                </Box>            
            </Box>
            <Box
                top={{md: '42rem', lg: '52.5rem'}}
                left={{md: '10rem', lg: '19rem'}}
                position='absolute'
                display={{ xs: 'none', md: 'block'}}
            >                
                <Box                
                    borderRadius="1.5rem"
                    background='rgb(255, 255, 255)'
                    boxShadow= 'rgb(0 0 0 / 15%) 0px 1px 50px'                                                
                    width={{md:'15.1rem', lg: "26.1rem"}}
                    height={{md: '13.4rem', lg:"23.3rem"}}
                    zIndex='2'
                    mb={{md: '0.9rem', lg: '1.6rem'}}
                >                
                    <Box
                        fontWeight= '600'
                        fontSize={{md: '1.5rem', lg: '2.5rem'}}
                        lineHeight={{md: '2.2rem', lg: '3.7rem'}}
                        color='rgba(73, 80, 87, 1)'
                        textAlign='center'
                        pt={{md: '0.7rem', lg: '1rem'}}
                    >Pagespeed</Box>
                    <Box
                        height={{md: '0.2rem', lg: '0.4rem'}}
                        mt={{md: '0.2rem', lg: '0.5rem'}}
                        background='rgb(232, 232, 232)'
                        width='100%'
                    />                
                    <Box
                        fontSize={{md: '4rem', lg: '7rem'}}
                        color='rgba(52, 195, 143, 1)'
                        textAlign='center'
                        fontWeight='600'

                    >   
                        96
                        <Text
                            as='span'
                            fontSize={{md: '1.4rem', lg: '2.3rem'}}
                        >%</Text>
                    </Box>
                    <Box
                        fontWeight= '600'
                        fontSize={{md: '1.2rem', lg: '2rem'}}
                        ml={{md: '2.4rem', lg: '4.2rem'}}
                        color='rgb(52, 195, 143)'                    
                    >Good</Box>
                    <Box
                        height={{md: '0.2rem', lg: '0.4rem'}}
                        width={{md: '10.7rem', lg: '18.4rem'}}
                        ml={{md: '2.4rem', lg: '4.2rem'}}
                        backgroundImage='linear-gradient(90deg, rgb(147, 235, 203) 0%, rgb(52, 195, 143) 73.44%)'
                    />
                </Box>       

                <Box                
                    borderRadius="1.5rem"
                    background='rgb(255, 255, 255)'
                    boxShadow= 'rgb(0 0 0 / 15%) 0px 1px 50px'                                                
                    width={{md: '14.8rem', lg: '25.5rem'}}
                    height={{md: '13.2rem', lg: '22.8rem'}}
                    zIndex='2'
                    mb='1rem'
                >                
                    <Box
                        fontWeight= '600'
                        fontSize={{md: '1.5rem', lg: '2.5rem'}}
                        lineHeight={{md: '2.2rem', lg: '3.7rem'}}
                        color='rgba(73, 80, 87, 1)'
                        textAlign='center'
                        pt={{md: '0.6rem', lg: '1rem'}}
                    >FCP</Box>
                    <Box
                        height={{md: '0.2rem', lg: '0.4rem'}}
                        mt={{md: '0.2rem', lg: '0.5rem'}}
                        background='rgb(232, 232, 232)'
                        width='100%'
                    />                
                    <Box
                        fontSize={{md: '3.5rem', lg: '7rem'}}
                        color='rgb(85, 110, 230)'
                        textAlign='center'
                        fontWeight='600'

                    >   
                        1.5s                        
                    </Box>
                    <Box
                        fontWeight= '600'
                        fontSize={{md: '1.2rem', lg: '2rem'}}
                        ml={{md: '2.4rem', lg: '4.2rem'}}
                        color='rgb(52, 195, 143)'                    
                    >Good</Box>
                    <Box
                        height={{md: '0.2rem', lg: '0.4rem'}}
                        width={{md: '10.4rem', lg: '18.4rem'}}
                        ml={{md: '2.4rem', lg: '4.2rem'}}
                        backgroundImage='linear-gradient(90deg, rgb(147, 235, 203) 0%, rgb(52, 195, 143) 73.44%)'
                    />
                </Box>                 
            </Box>
            <Box
                top={{md: '43rem', lg: '52rem'}}
                right={{md:'6.2rem', lg:'12rem'}}            
                width={{md:'6.1rem', lg:'10.5rem'}}
                height={{md:'6.1rem', lg:'10.5rem'}}
                zIndex='-1'
                position='absolute'
                background='rgba(241, 180, 76, 1)'
                borderRadius='50%'
            />
        </>
    )
}
