import { Box, Flex, Grid } from 'atoms'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        title: 'Add and Audit Portfolio',
        oi:'Try it now and get insights and data that can be used to create a better user experience for website visitors.'
    },
    {
        title: 'Add and Audit Competitor',
        oi:'Try it now and get insights and data that can be used to create a better user experience for website visitors.'
    },
    {
        title: 'Compare Portfolio',
        oi:'Try it now and get insights and data that can be used to create a better user experience for website visitors.'
    }
]

export const HomeWorkflow = () => {
    return (
        <Box pt='8rem'>
            <Box
                fontSize='2rem'
                lineHeight='3rem'   
                color='#556EE6'             
                textAlign='center'
                fontWeight='400'
            >
                Our Workflow
            </Box>
            <Box
                fontSize='4rem'
                lineHeight='6rem'   
                fontWeight='600'
                color='#495057'             
                textAlign='center'
                mt='1.6rem'
            >
                Simple and clear steps for valuable data
            </Box>
            <Box
                fontSize='1.4rem'
                lineHeight='2.2rem'   
                fontWeight='400'
                color='#495057'             
                textAlign='center'
                mt='1.6rem'
                maxWidth='46rem'
                mx='auto'
            >
                Try it now and get insights and data that can be used to create a better user experience for website visitors.
            </Box>
            <Box mt='9.9rem' maxWidth='75rem' mx='auto'>
                <Grid
                    gridTemplateColumns='repeat(3, 6.3rem)'
                    gridColumnGap='29rem'
                    mb='3.5rem'
                >
                    {
                        [1,2,3].map(item=>(
                            <Box    
                                width='6.3rem'
                                height='6.3rem'
                                background='rgb(29, 209, 227)'
                                borderRadius='50%'
                                key={item}
                            >
                                <Box
                                    fontSize='3rem'
                                    mt='1rem'
                                    color='#fff'
                                    fontWeight='600'
                                    textAlign='center'
                                >
                                    {item}
                                </Box>
                            </Box>
                        ))
                    }                    
                </Grid>
                <Box
                    position='absolute'
                    top='40%'
                    left='1rem'
                    width='75rem'
                    height='0.2rem'
                    zIndex='-1'
                >
                    <Image
                        src='/images/landing-workflow-dotted-line.svg'
                        width={750}
                        height={2}
                    />
                </Box>
                <Grid
                    gridColumnGap='35rem'
                    gridTemplateColumns='1.9rem 1.9rem'
                    position='absolute'
                    zIndex='3'
                    top='45%'
                    left='25%'
                >
                    <Box
                        width='1.9rem'
                        height='1.3rem'
                    >
                        <Image
                            src='/images/arrow-right-green.svg'
                            width={19}
                            height={13}
                        />
                    </Box>
                    <Box
                        width='1.9rem'
                        height='1.3rem'
                    >
                        <Image
                            src='/images/arrow-right-green.svg'
                            width={19}
                            height={13}
                        />
                    </Box>
                </Grid>
            </Box>

            <Flex
                alignItems='center'
                justifyContent='center'
                mt='3.5rem'
            >
                <Grid
                    gridTemplateColumns='repeat(3, 34rem)'
                    gridColumnGap='5.2rem'                
                >
                    {
                        data.map(item=>(
                            <Box 
                                width='34rem'
                                height='45rem'
                                background='#FFFFFF'
                                boxShadow='0px 2px 20px rgba(0, 0, 0, 0.15)'
                                borderRadius='1.5rem'
                            >
                                <Flex
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Box
                                        mt='2rem'
                                        width='18.3rem'
                                        height='18.3rem'
                                    >
                                        <Image
                                            src='/images/landing-workflow-card-img.png'
                                            width={183}
                                            height={183}
                                        />
                                    </Box>
                                    <Box
                                        mt='1.7rem'
                                        maxWidth='21rem'
                                        textAlign='center'
                                        color='#495057'
                                        fontWeight='600'
                                        fontSize= '2.5rem'
                                        lineHeight= '3.8rem'     
                                    >{item.title}</Box>
                                    <Box
                                        mt='1.9rem'
                                        maxWidth='30rem'
                                        textAlign='center'
                                        color='rgba(47, 47, 47, 0.498039)'
                                        fontWeight='400'
                                        fontSize= '1.4rem'
                                        lineHeight= '2.2rem'
                                    >{item.oi}</Box>
                                </Flex>
                            </Box>
                        ))
                    }                
                </Grid>     
            </Flex>

            <Box
                mt='11.6rem'
                background='url(/images/landing-workflow-bg.png)'
                height='35rem'
                width='111.7rem'
                mx='auto'
                mb='8.1rem'
            >
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box
                        maxWidth='79.5rem'
                        fontWeight= '600'
                        fontSize= '4.2rem'
                        lineHeight= '6.3rem'
                        textAlign= 'center'
                        mt='7.8rem'
                        color='#fff'
                    >
                        Now you can check your website’s health for Free
                    </Box>
                    <Flex
                        width='31rem'
                        height='5.5rem'
                        background='#245BAB'
                        boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'
                        borderRadius='0.4px'
                        fontWeight= '600'
                        fontSize= '2rem'
                        lineHeight= '3rem'
                        alignItems='center'
                        justifyContent='center'
                        mt='3.6rem'
                        color='#fff'
                    >
                        Try Now
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
